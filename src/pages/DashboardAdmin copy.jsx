import { useEffect, useState } from 'react'
import { alertMsg } from "../helpers/generalFunctions"
import { useContact } from '../hooks/useContact'
import { useReserved } from '../hooks/useReserved'
import { months } from 'moment/moment'

export const DashboardAdmin = () => {

  const {infoContact, changeState}= useContact()
  const {infoReserved, changeStateReserv, cancelReserv}= useReserved()
  
  useEffect(() => {

  }, [])

  let  hid='hidden'

  return (
    <main className="">
      <section className="container">
        <h1 className="d-flex align-items-center">
          <span className="material-symbols-outlined">account_circle</span>
          Adminstrador - Dashboard
        </h1>
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

        <article>
        <h2>Reservas</h2>
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
          <article key={el.id} className={`py-1 d-flex row border-bottom ${index%2===0? 'bg-light':''}`}>
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
                    <span className="material-symbols-outlined">{el.state==="RESERVADO" ? "error": "check_circle"}</span>
                    {el.state}
                  </div>
                  
                  <button type="button" className={`btn btn-success d-flex ${el.state === "CONFIRMADO" ? 'd-none' : ''} mx-2`} onClick={()=>changeStateReserv(el.id)}>
                    <span className="material-symbols-outlined">check_circle</span>
                    
                  </button>

                  <button type="button" className="btn btn-danger d-flex mx-1" onClick={()=>cancelReserv(el.id)} >
                    <span className="material-symbols-outlined">Cancel</span>
                    
                  </button>

            </div>
          </article>
                  
                  
                  
              ))}
        </section>
        
        </article>


      </section>
    </main>
  )
}

