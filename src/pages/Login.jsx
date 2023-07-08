import React, { useContext, useState } from 'react'
import SlideShow from '../components/SlideShow'
import { useUser } from '../hooks/useUser'
import { alertMsg } from '../helpers/generalFunctions'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate();
  //const { infoUser, searchUser, userName, setUserName, isValidPermissions, setIsValidPermissions } = useUser()
  const { infoUser, searchUser } = useUser()

  const [inputUser, setInputUser] = useState({
    email: '',
    pw: ''
  })

  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setInputUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const user = await searchUser(inputUser)
      if(user!==null){
        alertMsg('success', 'Bienvenid@ '+user.name, 2000, true)/
        navigate('/dashboardAdmin')
      }else{
        alertMsg('error', 'usuario o contraseña incorrecto', 3000, true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <main>
      <section className="container">
        <h1 className="d-flex align-items-center">
          <span className="material-symbols-outlined">account_circle</span>
          Iniciar Sesión
        </h1>
        <article>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <img src="./img/about.jpg" className="card-img imgAbout" alt="imagen Sobre nosotros" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="card-body">
              <form id="loginForm" onSubmit={submitForm} className="col-12">
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required onChange={handleChangeForm} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="pw">Contraseña:</label>
              <input type="password" className="form-control" id="pw" name="pw" required onChange={handleChangeForm} />
            </div>
            <button type="submit" className="btn btn-primary mt-3 col-12">
              Ingresar
            </button>
          </form>
              </div>
            </div>
          </div>
        </div>

          
        </article>
      </section>
    </main>
  )
}

export default Login
