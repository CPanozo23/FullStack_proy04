import { useContact } from '../../hooks/useContact'
import { alertMsg } from "../../helpers/generalFunctions"

export const ContactDA = () => {
  const {infoContact, changeState}= useContact()
  return(
    <article>
        <h2>Mensajes de Contacto</h2>
        <section className="stateBtn d-flex">
          Estados:
          <div className="btn btn-warning d-flex mx-2">
            <span className="material-symbols-outlined d-flex">error</span>
            SIN RESPONDER
          </div>
          <div className="btn btn-success d-flex"> 
            <span className="material-symbols-outlined">check_circle</span>
            RESPONDIDO
          </div>
        </section>
        <section className='mt-2 contact'>
        {infoContact.map((el, index) => (
          <article key={el.id} className={`d-flex border-bottom ${index%2===0? 'bg-light':''} row`}>
            <div className='row col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12'>
              <div className='col-12 col-xl-2 col-lg-2 col-md-4 col-sm-4 fw-bold'>
                {el.datec.day}/{el.datec.month}/{el.datec.year}
              </div>
              <div className='col-6 col-xl-3 col-lg-3 col-md-4 col-sm-4 fw-bold'>
                {el.name}
              </div>
              <div className='col-6 col-xl-3 col-lg-3 col-md-4 col-sm-4 fw-bold'>
                {el.lastname}
              </div>
              <div className='col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6 fw-bold'>
                {el.email}
              </div>
              <div className='col-12 col-xl-2 col-lg-2 col-md-6 col-sm-6 fw-bold'>
                {el.subject}
              </div>
              <div className='col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 text-justify'>
                {el.message}
              </div>
            </div>
            <div className='col-12 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 align-items-center my-2'>
              <button type="button" className={el.state==="SIN RESPONDER" ? "btn btn-warning d-flex": "btn btn-success d-flex"} onClick={()=>changeState(el.id)} >
                <span className="material-symbols-outlined">{el.state==="SIN RESPONDER" ? "error": "check_circle"}</span>
                    {el.state}
              </button>
            </div>
          </article>
                  
              ))}
        </section>

        </article>
  )
}