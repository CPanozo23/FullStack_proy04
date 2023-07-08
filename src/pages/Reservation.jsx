import { useState } from 'react'
import { useReserved } from '../hooks/useReserved'
import { actualDate, alertMsg, reservations } from '../helpers/generalFunctions'
import { useSumReserved } from '../hooks/useSumReserved'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

export const Reservation = () => {
  const navigate = useNavigate();

  const { sumReserved, incrementReserved } = useSumReserved()
  let targets = [
    document.querySelector('[name="hour"]'),
    document.querySelector('[name="table2"]'),
    document.querySelector('[name="table4"]'),
    document.querySelector('[name="name"]'),
    document.querySelector('[name="lastname"]'),
    document.querySelector('[name="email"]'),
    document.querySelector('[name="phone"]')
  ]

  let dateInput = []

  const { infoReserved, searchDate, addReservation } = useReserved()
  const [hourSelect, setHourSelect] = useState(0)

  const [infoReservation, setInfoReservation] = useState({
    dateR: '',
    hour: '',
    table2: '',
    table4: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    state: 'RESERVADO'
  })


  function msgDate(icon, msg, state) {
    alertMsg(icon, msg, 3000, true)
    targets = targets.map((e) => e.disabled = state)
  }

  const readDataReserved = async (day, month, year) => {
    await searchDate(day, month, year)
    if (JSON.parse(localStorage.getItem('sumReserv')) !== null) {
      handleChangeHour('hour')
    } else {
      if (document.querySelector('[name="hour"]').value === "") {
        console.log("empty hour")
      } else {
        handleChangeHour({})
      }
    }
  }

  const handleChangeForm = ({ target }) => {

    setInfoReservation({
      ...infoReservation, [target.name]: target.value
    })
  }

  const handleChangeDate = ({ target }) => {
    localStorage.removeItem('sumReserv')
    let dateNow = actualDate().split("/")
    dateNow = dateNow.map((e) => parseInt(e))

    dateInput = target.value.split("-")
    dateInput = dateInput.map((e) => parseInt(e));
    let txt = "La fecha debe ser entre el día siguiente y un año"
    if (isNaN(dateInput[0])) {
      msgDate("error", txt, true)
    } else {
      if (dateInput[0] < dateNow[2]) {
        msgDate("error", txt, true)
      } else if (dateInput[0] === dateNow[2] && dateInput[1] === dateNow[1] && dateInput[2] <= dateNow[0]) {
        msgDate("error", txt, true)
      } else {
        if (dateInput[0] > dateNow[2] + 1) {
          msgDate("error", txt, true)
        } else if (dateInput[0] === dateNow[2] + 1 && dateInput[1] > dateNow[1]) {
          msgDate("error", txt, true)
        } else if (dateInput[0] === dateNow[2] + 1 && dateInput[1] === dateNow[1] && dateInput[2] > dateNow[0]) {
          msgDate("error", txt, true)
        } else {
          setInfoReservation({
            ...infoReservation, [target.name]: target.value
          })
          targets = targets.map((e) => e.disabled = false)
          readDataReserved(dateInput[2], dateInput[1], dateInput[0])
        }
      }
    }
  }

  const handleChangeHour = ({ target }) => {
    if (typeof (target) === "undefined") {
      incrementReserved(JSON.parse(localStorage.getItem('sumReserv')));
      JSON.parse(localStorage.getItem('sumReserv')).hours.map((el, index) => {

        if (el === parseInt(document.querySelector('[name="hour"]').value)) {
          setHourSelect(index)
        }
      })

    } else {
      setInfoReservation({
        ...infoReservation, [target.name]: target.value

      })
      incrementReserved(JSON.parse(localStorage.getItem('sumReserv')));
      document.querySelector('[name="tbCant2"]').hidden = true
      document.querySelector('[name="tbCant4"]').hidden = true
      JSON.parse(localStorage.getItem('sumReserv')).hours.map((el, index) => {

        if (el === parseInt(target.value)) {
          setHourSelect(index)
          document.querySelector('[name="tbCant2"]').hidden = false
          document.querySelector('[name="tbCant4"]').hidden = false
        }
      })
    }

  }

  const submitForm = async (e) => {
    e.preventDefault()

    let tb2 = document.querySelector('[name="table2"]').value
    let tb4 = document.querySelector('[name="table4"]').value
    if ((tb2 > 0 && (tb4 === '' || tb4 < 1)) || (tb4 > 0 && (tb2 === '' || tb2 < 1))) {
      try {
        await addReservation(infoReservation)
        document.querySelector('[name="tbCant2"]').hidden = true
        document.querySelector('[name="tbCant4"]').hidden = true
        msgDate('success', 'Reserva realizada', true)

        localStorage.removeItem('sumReserv')
        localStorage.removeItem('generalReserv')
        document.getElementById('reservedForm').reset()
        navigate('/')
      } catch (error) {
        if (error.message.includes('internal')) {
          msgDate('error', 'Intente más tarde', true)
        } else {
          msgDate('error', 'Algo salió mal', true)
        }
      }
    } else {
      let txt = ("Debe seleccionar al menos una mesa")
      msgDate("error", txt, false)
    }

  }

  return (
    <main className="reservation">
      <img src="./img/reserved.jpg" alt="" />
      <section className="container">
        <h1 className=" d-flex align-items-center">
          <span className="material-symbols-outlined">restaurant</span>
          Reservaciones
        </h1>
        <article className=''>
          <form id="reservedForm" onSubmit={submitForm}>
            <div className="row mb-2">
              <div className="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="dateR">Fecha</label>
                <input type="date" id="dateR" name="dateR" className="form-control border-primary" required onChange={handleChangeDate} min={moment().format('YYYY-MM-DD')} max={moment().add('1', 'years').format('YYYY-MM-DD')} />
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="hour">Hora</label>
                <select id="hour" name="hour" className="form-control border-primary" required onChange={handleChangeHour} disabled>
                  <option value="">Seleccione</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                </select>
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="table2">Mesa para 2 personas</label>
                <input type="number" id="table2" name="table2" className="form-control border-primary" min="0" max={JSON.parse(localStorage.getItem("sumReserv")) !== null ? JSON.parse(localStorage.getItem("sumReserv")).countTable2[hourSelect] : "10"} onChange={handleChangeForm} disabled />
                <span name="tbCant2" hidden={true}>Disponibles: {JSON.parse(localStorage.getItem("sumReserv")) !== null ? JSON.parse(localStorage.getItem("sumReserv")).countTable2[hourSelect] : "10"} /10</span>
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="table4">Mesa para 4 personas</label>
                <input type="number" id="table4" name="table4" className="form-control border-primary" min="0" max={JSON.parse(localStorage.getItem("sumReserv")) !== null ? JSON.parse(localStorage.getItem("sumReserv")).countTable4[hourSelect] : "10"} onChange={handleChangeForm} disabled />
                <span name="tbCant4" hidden={true}>Disponibles: {JSON.parse(localStorage.getItem("sumReserv")) !== null ? JSON.parse(localStorage.getItem("sumReserv")).countTable4[hourSelect] : "10"} /10</span>

              </div>
            </div>
            <h3>Datos de contacto</h3>
            <div className="row mb-2">
              <div className="form-group col-sm-6 col-xs-12">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" className="form-control border-primary" required onChange={handleChangeForm} disabled />
              </div>
              <div className="form-group col-sm-6 col-xs-12">
                <label htmlFor="lastname">Apellido</label>
                <input type="text" id="lastname" name="lastname" className="form-control border-primary" required onChange={handleChangeForm} disabled />
              </div>
              <div className="form-group col-sm-6 col-xs-12">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control border-primary" required onChange={handleChangeForm} disabled />
              </div>
              <div className="form-group col-sm-6 col-xs-12">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" className="form-control border-primary" required onChange={handleChangeForm} disabled />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Realizar Reserva</button>
          </form>
        </article>
      </section>
    </main>
  )
}

