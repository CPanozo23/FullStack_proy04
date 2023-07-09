import { useState } from "react"
import { db } from '../firebase/firebase'
import { alertMsg } from "../helpers/generalFunctions"

export const useUser = () => {
  const [infoUser] = useState(null)
  const searchUser = async (inputUser) => {
    try {
      const querySnapshot = await db.collection("user")
        .where("email", "==", inputUser.email)
        .where("password", "==", inputUser.pw)
        .get()
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data()
        return userData
      } else {
        return null
      }
    } catch (e) {
      alertMsg('error', 'Intente más tarde', 2000, true)
    }
  }

  return {
    infoUser, searchUser
  }
}