import { useState } from "react"
import { reservations } from '../helpers/generalFunctions'

export const useCounter = (initialValue = reservations) => {

    const [counter, setCounter]=useState(initialValue)

  const increment = (suma) =>{  
    setCounter(JSON.parse(localStorage.getItem('sumReserv')))
  }

  return{
    counter,
    increment
  }
}
