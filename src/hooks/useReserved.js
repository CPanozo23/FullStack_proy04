import { useState, useEffect } from "react"
import { db } from '../firebase/firebase'
import { alertMsg, reservations } from "../helpers/generalFunctions"
import { useSumReserved } from './useSumReserved'

export const useReserved = () => {

  const [infoReserved, setInfoReserved] = useState([])
  const {incrementReserved} = useSumReserved()
  let generalReserv= reservations()

  useEffect(() => {
    db.collection('reserved')
  .orderBy("dater.year", "desc")
  .orderBy("dater.month", "desc")
  .orderBy("dater.day", "desc")
  .orderBy("hour", "desc")
  .onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setInfoReserved(docs);
  });

  }, [])

  const searchDate = async (day, month, year) => {
    try {
      localStorage.setItem('sumReserv', JSON.stringify(generalReserv))

      await db.collection("reserved")
        .where("dater.day", "==",day)
        .where("dater.month", "==",month)
        .where("dater.year", "==",year)
        .onSnapshot((querySnapshot) => {
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
          generalReserv.hours.forEach((base,index) => {
              if(doc.data().hour===base){
                generalReserv.countTable2[index]-=parseInt(doc.data().table2)
                generalReserv.countTable4[index]-=parseInt(doc.data().table4)
              }
          })
          })
        
        localStorage.setItem('sumReserv', JSON.stringify(generalReserv))
        incrementReserved(JSON.parse(localStorage.getItem('sumReserv')))
      })
    } catch (error) {
      alertMsg('error', 'Intente más tarde', 2000, true)
    }
    localStorage.setItem('generalReserv', JSON.stringify(generalReserv))
  }

  const addReservation = async (infoReservation) => {
    let dateInput = infoReservation.dateR.split("-")
    dateInput = dateInput.map((e) => parseInt(e));
    let tb2=0, tb4=0
    infoReservation.table2.length===0 ? tb2=0 : tb2= parseInt(infoReservation.table2)
    infoReservation.table4.length===0 ? tb4=0 : tb4= parseInt(infoReservation.table4)
    let info = {
      contact: {
        email: infoReservation.email,
        lastname: infoReservation.lastname,
        name: infoReservation.name,
        phone: parseInt(infoReservation.phone)
      },
      dater:{
        day:dateInput[2],
        month:dateInput[1],
        year:dateInput[0],
      },
      hour: parseInt(infoReservation.hour),
      state: infoReservation.state,
      table2:tb2,
      table4:tb4,
    }
    await db.collection('reserved').add(info)
  }

  const cancelReserv = async (id) => {
    Swal.fire({
      title: '¿Está seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          db.collection('reserved').doc(id).delete();
          alertMsg('success', 'Eliminado', 2000, true)
        } catch (error) {
          alertMsg('error', 'Intente más tarde', 2000, true)
        }
      }
    })
  }

  const changeStateReserv = async (id) => {
    try {
      const doc = await db.collection('reserved').doc(id).get()
      if (doc.exists && doc.data().state ==='RESERVADO'){
        await db.collection('reserved').doc(id).update({ state: "CONFIRMADO" })
        alertMsg('success', 'Estado actualizado', 2000, true)
      } 
    } catch (error) {
      alertMsg('error', 'Intente más tarde', 2000, true)
    }
  }
  
  localStorage.removeItem('generalReserv')

  return {
    infoReserved,
    searchDate,
    addReservation,
    changeStateReserv,
    cancelReserv
  }
}