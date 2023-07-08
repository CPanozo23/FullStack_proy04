import { useState, useEffect } from "react"
import { db } from '../firebase/firebase'
import { alertMsg } from "../helpers/generalFunctions"

export const useContact = () => {
  const [infoContact, setInfoContact] = useState([])

  useEffect(() => {
    db.collection("contact")
    .orderBy("datec.year", "desc")
    .orderBy("datec.month", "desc")
    .orderBy("datec.day", "desc")
    .onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      })
      setInfoContact(docs)
    })
  }, [])

  const changeState = async (id) => {
    const doc = await db.collection('contact').doc(id).get()
    if (doc.exists){
      const actualState = doc.data().state
      const newState = actualState === 'SIN RESPONDER' ? 'RESPONDIDO' : 'SIN RESPONDER'
      await db.collection('contact').doc(id).update({ state: newState })
      alertMsg('success', 'Estado actualizado', 2000, true)
    }else{
      alertMsg('error', 'Intente más tarde', 2000, true)
    }
  }

  const addContact = async (infoContact) => {
    let dateInput = infoContact.date.split("/")
    dateInput = dateInput.map((e) => parseInt(e));
    let info = {
      email: infoContact.email,
      datec:{
        day:dateInput[0],
        month:dateInput[1],
        year:dateInput[2],
      },
      lastname: infoContact.lastname,
      message:infoContact.message,
      name: infoContact.name,
      state: infoContact.state,
      subject: infoContact.subject
    }
    await db.collection('contact').add(info)
  }

  return {
    infoContact,
    changeState,
    addContact
  }
}