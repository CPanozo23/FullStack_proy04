import { useContext, useState } from "react"
import { db } from '../firebase/firebase'
import { alertMsg } from "../helpers/generalFunctions"
import { AuthContext } from "../helpers/AuthContext"

export const useUser = () => {
  const [infoUser, setUser] = useState(null)
  //const [userName, setUserName] = useState(null)
  //const [isValidPermissions, setIsValidPermissions] = useState(false)

  const { setAuthenticatedUser, setPermissions } = useContext(AuthContext);
  
  const searchUser = async(inputUser) => {
    try {
      const querySnapshot = await db.collection("user")
      .where("email", "==", inputUser.email)
      .where("password", "==", inputUser.pw)
      .get()
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data()
      //setUserName(userData)

      /************** */

      setAuthenticatedUser(userData);
      //setIsValidPermissions(true)
      setPermissions(true);
      return userData
    } else {
      return null
    }
    } catch (e) {
        alertMsg('error', 'Intente más tarde', 2000, true)
    }
  }

  return {
    infoUser, searchUser,
    //userName, setUserName,
    //isValidPermissions, setIsValidPermissions,
    //authenticatedUser, setAuthenticatedUser,
    //permissions, setPermissions
  }
}