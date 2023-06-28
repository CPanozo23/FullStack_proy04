import { useEffect, useState } from 'react'
import { useReserved } from '../hooks/useReserved'
import { db } from "../firebase/firebase"
import { actualDate, alertMsg, reservations } from '../helpers/generalFunctions'
import { useCounter } from '../hooks/useSumReserved'



export const Reservation = () => {
  
  /*const init = localStorage.getItem('productosLaBarrera') ? JSON.parse(localStorage.getItem('productosLaBarrera'))
  const [productosLaBarrera, setProductosLaBarrera] = useState(init);
  */
let countTablePosition=0
  const {counter, increment} = useCounter()
  localStorage.setItem('generalReserv', JSON.stringify(reservations()))

  const initialValue = {
    dateR: [], hour: '', table2: '', table4: '', contact:[], state: ''
    }
  const {infoReserved, searchDate}= useReserved()
  const [sumReserved, setSumReserved] = useState([]);
  const [hourSelect, setHourSelect] = useState(0);

  useEffect(() => {
  
  }, [])
  const readDataReserved = async (day, month, year) => {
    // Solo en la fecha seleccionada
    await searchDate(day, month, year);
  };
  
  let dateInput = []

  const [infoReservation, setInfoReservation] = useState({
    dateR: '',
    hour: '',
    table2: '',
    table4: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    state: 'Sin realizar'
  })

  const handleChangeHour = ({target}) => {

    countTablePosition=target.value
    increment(JSON.parse(localStorage.getItem('sumReserv')));
    JSON.parse(localStorage.getItem('sumReserv')).hours.map((el, index) => {
      if(el===parseInt(target.value)){
        setHourSelect(index)
      }
    })
    
  }
  
  const handleChangeForm = ({ target }) => {
    localStorage.removeItem('sumReserv');

    setInfoReservation({
      ...infoReservation, [target.name]: target.value
    })
    let dateNow = actualDate().split("/")
    dateNow = dateNow.map((e) => parseInt(e));

    let targets = [
      document.querySelector('[name="hour"]'),
      document.querySelector('[name="table2"]'),
      document.querySelector('[name="table4"]'),
      document.querySelector('[name="name"]'),
      document.querySelector('[name="lastname"]'),
      document.querySelector('[name="email"]'),
      document.querySelector('[name="phone"]')
    ]

    if (target.name === "dateR") {
      dateInput = target.value.split("-")
      dateInput = dateInput.map((e) => parseInt(e));
      let txt= "La fecha debe ser entre el día siguiente y un año"
      if(isNaN(dateInput[0])){
        msgDate(txt,true)
      }else{
        if(dateInput[0]<dateNow[2]){
          msgDate(txt,true)
        }else if(dateInput[0]===dateNow[2] && dateInput[1]<dateNow[1]){
          msgDate(txt,true)
        }else if(dateInput[0]===dateNow[2] && dateInput[1]===dateNow[1] &&dateInput[2]<=dateNow[0]){
          msgDate(txt,true)
        } else {
          if(dateInput[0]>dateNow[2]+1){
            msgDate(txt,true)
          }else if(dateInput[0]===dateNow[2]+1 && dateInput[1]>dateNow[1]){
            msgDate(txt,true)
          }else if(dateInput[0]===dateNow[2]+1 && dateInput[1]===dateNow[1] &&dateInput[2]>dateNow[0]){
            msgDate(txt,true)
          } else {
            targets = targets.map((e) => e.disabled=false)
            readDataReserved(dateInput[2], dateInput[1], dateInput[0])
        }
      }        
      }
    }

    function msgDate(msg, state){
      console.log(msg)
      alertMsg("error", msg, 3000, true)
      targets = targets.map((e) => e.disabled=state)
    }
    
  }
  const submitForm = async (e) => {
    e.preventDefault()
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
            <p>Horas</p>
            
            {infoReserved.map((el) => ( 
            <p key={el.id}>{el.dater.day}-{el.dater.month}-{el.dater.year} | {el.hour} | M2: {el.table2} | M4: {el.table4} | {el.state}</p>
            ))}
            
            <h2>{counter.countTable2}</h2>
            <h2>{counter.countTable2[countTablePosition]}</h2>
            <h2>{counter.countTable4}</h2>
            <h2>{counter.countTable4[countTablePosition]}</h2>       
              <form id="reservedForm" onSubmit={submitForm}>
                <div className="row mb-2">
                  <div className="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <label htmlFor="dateR">Fecha</label>
                    <input type="date" id="dateR" name="dateR" className="form-control border-primary" required onChange={handleChangeForm} />
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
                    <input type="number" id="table2" name="table2" className="form-control border-primary" min="0" max="10" onChange={handleChangeForm} disabled />
                    <span>Disponibles: {counter.countTable2[hourSelect]}/10</span>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <label htmlFor="table4">Mesa para 4 personas</label>
                    <input type="number" id="table4" name="table4" className="form-control border-primary" min="0" max="10" onChange={handleChangeForm} disabled />
                    <span>Disponibles: {counter.countTable4[hourSelect]}/10</span>

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

