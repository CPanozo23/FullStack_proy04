//import { useState } from 'react'
import { Footer } from './components/Footer'
import {NavBar} from './components/NavBar'
import { MainRoutes } from './routes/MainRoutes'
//import { useUser } from './hooks/useUser'
import { AuthProvider } from './helpers/AuthContext'
function App() {
  //const { infoUser, searchUser, userName, setUserName, isValidPermissions, setIsValidPermissions } = useUser()
  return (
    <>
    <AuthProvider>
        <NavBar />
        <MainRoutes />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
