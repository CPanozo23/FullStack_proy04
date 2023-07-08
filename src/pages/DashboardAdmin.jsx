import { ContactDA } from "../components/admin/ContactDA"
import { ReservedDA } from "../components/admin/ReservedDA"

export const DashboardAdmin = () => {

  return (
    <main className="">
      <section className="container">
        <h1 className="d-flex align-items-center">
          <span className="material-symbols-outlined">account_circle</span>
          Adminstrador - Dashboard
        </h1>
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

