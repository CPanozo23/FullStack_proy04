import { useEffect, useState } from 'react'
import { alertMsg } from "../helpers/generalFunctions"
import { useContact } from '../hooks/useContact'
import { useReserved } from '../hooks/useReserved'
import { db } from '../firebase/firebase'

export const DashboardAdmin = () => {

  const {infoContact, changeState}= useContact()
  const {infoReserved}= useReserved()
  
  useEffect(() => {

  }, [])

  return (
    <main className="">
      <section className="container">
        <h1 className=" d-flex align-items-center">
          <span className="material-symbols-outlined">account_circle</span>
          Adminstrador - Dashboard
        </h1>
        <article>
        <h2>Mensajes de Contacto</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Asunto</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Mensaje</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
            
              {infoContact.map((el) => (
                <tr key={el.id}>
                  <td>{el.date}</td>
                  <td>{el.subject}</td>
                  <td>{el.email}</td>
                  <td>{el.name}</td>
                  <td>{el.lastname}</td>
                  <td>{el.message}</td>
                  <td><button onClick={()=>changeState(el.id)}>{el.state}</button></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        </article>

        <article>
        <h2>Reservas</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Mesa 2</th>
                <th>Mesa 4</th>
                <th>Cliente</th>
                <th>Email</th>
                <th>Fono</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {infoReserved.map((el) => (
                <tr key={el.id}>
                  <td>{el.dater.day}/{el.dater.month}/{el.dater.year}</td>
                  <td>{el.hour}:00</td>
                  <td>{el.table2}</td>
                  <td>{el.table4}</td>
                  <td>{el.contact.name} {el.contact.lastname}</td>
                  <td>{el.contact.email}</td>
                  <td>{el.contact.phone}</td>
                  <td><button onClick={()=>changeState(el.id)}>{el.state}</button></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        </article>


      </section>
    </main>
  )
}

