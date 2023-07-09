import { useState } from "react"
import { reservations } from '../helpers/generalFunctions'
export const useSumReserved = (initialValue = reservations) => {
  const [sumReserved, setSumReserved] = useState(initialValue)
  const incrementReserved = (suma) => {
    setSumReserved(JSON.parse(localStorage.getItem('sumReserv')))
  }
  return {
    sumReserved,
    incrementReserved
  }
}
