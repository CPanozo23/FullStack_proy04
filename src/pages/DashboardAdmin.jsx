import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactDA } from "../components/admin/ContactDA"
import { ReservedDA } from "../components/admin/ReservedDA"

const DashboardAdmin = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <main className="">
      <section className="container">
        <div className='row'>
          <h1 className="d-flex align-items-center col-12 col-xl-10 col-lg-9 col-md-9 col-sm-8">
            <span className="material-symbols-outlined">account_circle</span>
            Adminstrador - Dashboard
          </h1>
          <div className="d-flex justify-content-end col-12 col-xl-2 col-lg-3 col-md-3 col-sm-4 d-flex align-items-center">
            <button onClick={handleLogout} className="btnClose btn btn-danger ml-auto d-flex align-items-center">
              <span className="material-symbols-outlined mx-1">cancel</span>Cerrar sesión
            </button>
          </div>
        </div>
        
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Reservas
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ReservedDA />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Mensajes
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ContactDA />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default DashboardAdmin