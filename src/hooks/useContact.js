import { useState, useEffect } from "react"
import { db } from '../firebase/firebase'
import { alertMsg } from "../helpers/generalFunctions"

export const useContact = () => {
  const [infoContact, setInfoContact] = useState([])

  useEffect(() => {
    db.collection("contact").onSnapshot((querySnapshot) => {
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
      const newState = actualState === 'Sin responder' ? 'Respondido' : 'Sin responder'
      await db.collection('contact').doc(id).update({ state: newState })
      alertMsg('success', 'Estado actualizado', 2000, true)
    }else{
      alertMsg('error', 'Intente más tarde', 2000, true)
    }
  }

  return {
    infoContact,
    changeState
  }
}