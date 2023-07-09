import { useReserved } from '../../hooks/useReserved'

export const ReservedDA = () => {
  const { infoReserved, changeStateReserv, cancelReserv } = useReserved()
  let hid = 'hidden'
  return (
    <article>
      <section className="stateBtn d-flex">
        Estados:
        <div className="btn btn-warning d-flex mx-2">
          <span className="material-symbols-outlined d-flex">error</span>
          RESERVADO
        </div>
        <div className="btn btn-success d-flex">
          <span className="material-symbols-outlined">check_circle</span>
          CONFIRMADO
        </div>
      </section>
      <section className='reservas mt-2'>
        {infoReserved.map((el, index) => (
          <article key={el.id} className={`py-1 d-flex row border-bottom ${index % 2 === 0 ? 'bg-light' : ''}`}>
            <div className='col-xl col-md col-sm-12 row align-items-center'>
              <span className='col-6 col-xl-5 col-md-12 col-sm-6 align-items-center px-0 fw-bold'>
                <span className="material-symbols-outlined iconMaterial">calendar_month</span>
                {el.dater.day}/{el.dater.month}/{el.dater.year} &nbsp;
                {el.hour}:00</span>
              <span className='col-6 col-xl-7 col-md-12 col-sm-6 px-0 fw-bold'> <span className="material-symbols-outlined iconMaterial">
                table_restaurant
              </span>Mesa 2: {el.table2} &nbsp;Mesa 4: {el.table4}</span>
            </div>
            <div className='col-xl-5 col-lg-6 col-md-7 col-sm-12 col-xs-12 row'>
              <span className='col-12 col-sm-12 col-xs-12'>
                <span className="material-symbols-outlined iconMaterial">person</span>
                {el.contact.name} {el.contact.lastname}</span>
              <span className='col-7'><span className="material-symbols-outlined iconMaterial">mail</span>{el.contact.email}</span>
              <span className='col-5'><span className="material-symbols-outlined iconMaterial">call</span>{el.contact.phone}</span>
            </div>
            <div className='col-12 col-xl-3 col-lg-4 col-md-2 col-sm-12 col-xs-12 row align-items-center px-0'>
              <div className={`stateBtnDiv btn btn-${el.state === "RESERVADO" ? 'warning' : 'success'} d-flex mx-1 align-items-center`}>
                <span className="material-symbols-outlined">{el.state === "RESERVADO" ? "error" : "check_circle"}</span>
                {el.state}
              </div>
              <button type="button" className={`btn btn-success d-flex ${el.state === "CONFIRMADO" ? 'd-none' : ''} mx-2`} onClick={() => changeStateReserv(el.id)}>
                <span className="material-symbols-outlined">check_circle</span>
              </button>
              <button type="button" className="btn btn-danger d-flex mx-1" onClick={() => cancelReserv(el.id)} >
                <span className="material-symbols-outlined">Cancel</span>
              </button>
            </div>
          </article>
        ))}
      </section>
    </article>
  )
}