import { useState, useEffect } from "react"
import { db } from '../firebase/firebase'
import { reservations } from "../helpers/generalFunctions"
import { useCounter } from './useSumReserved'

export const useReserved = () => {
  const [infoReserved, setInfoReserved] = useState([])
  const {increment} = useCounter()
  let generalReserv= reservations()
  let sumReserv
  useEffect(() => {
    db.collection('reserved').onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setInfoReserved(docs)
    })
  }, [])

  const searchDate = async (day, month, year) => {
    console.log(day,month,year)
    let exist = false
    try {
      await db.collection("reserved")
        .where("dater.day", "==",day)
        .where("dater.month", "==",month)
        .where("dater.year", "==",year)
        .onSnapshot((querySnapshot) => {
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
          exist=true
          generalReserv.hours.forEach((base,index) => {
              if(doc.data().hour===base){
                generalReserv.countTable2[index]-=parseInt(doc.data().table2)
                generalReserv.countTable4[index]-=parseInt(doc.data().table4)
              }
          })
          })
        
        localStorage.setItem('sumReserv', JSON.stringify(generalReserv))
        localStorage.setItem('generalReserv', JSON.stringify(generalReserv))
        console.log(JSON.parse(localStorage.getItem('generalReserv')))
        increment(JSON.parse(localStorage.getItem('sumReserv')))


      })
      
      if(exist===false){
        if (localStorage.getItem('sumReserv') !== null){
          localStorage.removeItem('sumReserv')
        }
      }
    } catch (error) {
      console.log(error)
    }
    localStorage.setItem('generalReserv', JSON.stringify(generalReserv))

  }

console.log(JSON.parse(localStorage.getItem('generalReserv')))
  return {
    infoReserved,
    searchDate
  }
}