import { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { alertMsg } from "../helpers/generalFunctions"

export const DashboardAdmin = () => {
  
  const [infoContact, setInfoContact] = useState([])
  
  useEffect(() => {
    readDataContact()
  }, [])

  const readDataContact = async () => {
    db.collection('contact').onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setInfoContact(docs)
    })
  }

  const changeState = async(id) => {
    const doc = await db.collection('contact').doc(id).get()

    console.log(doc.data())
    if (doc.exists){
      console.log("Encontrado")
      const actualState = doc.data().state
      const newState = actualState === 'Sin responder' ? 'Respondido' : 'Sin responder'
      await db.collection('contact').doc(id).update({ state: newState })
      alertMsg('success', 'Estado actualizado', 2000, true)
    }else{
      alertMsg('error', 'Intente más tarde', 2000, true)

    }
  }

  return (
    <main className="">
      <section className="container">
        <h1 className=" d-flex align-items-center">
          <span className="material-symbols-outlined">account_circle</span>
          Adminstrador - Dashboard
        </h1>
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
      </section>
    </main>
  )
}

