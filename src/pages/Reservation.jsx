import { useEffect, useState } from 'react'

export const Reservation = () =>  {

  useEffect(() => {
    //luego dejar en otro js 
    document.getElementById("reservaForm").addEventListener("submit", function(event) {
      event.preventDefault()
      let fechaInput = document.getElementById("fecha").value;
      console.log(fechaInput) // YYYY/MM/DD
      let fechaActual = new Date();
      console.log(fechaActual.getDay())
    })
  })

  //cleanForm

  return(
    <main class="reservation">
      <img src="./img/reserved.jpg" alt="" />
        <section class="container">
        <h1 className=" d-flex align-items-center">
        <span class="material-symbols-outlined">restaurant</span>
        Reservaciones
      </h1>
      <article className=''>
        <form id="reservaForm">
          <div className="row mb-2">
            <div class="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <label htmlFor="fecha">Fecha</label>
              <input type="date" id="fecha" class="form-control border-primary" min="" required />
            </div>
            <div class="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <label htmlFor="hora">Hora</label>
              <select id="hora" class="form-control border-primary" required>
                <option value="">Seleccione</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
              </select>
            </div>
            <div class="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <label htmlFor="mesa">Mesa para 2 personas</label>
              <input type="number" id="mesa" class="form-control border-primary" min="0" max="10" />
            </div>
            <div class="form-group col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <label htmlFor="mesa">Mesa para 4 personas</label>
              <input type="number" id="mesa" class="form-control border-primary" min="0" max="10" />
            </div>
          </div>
          <h3>Datos de contacto</h3>
          <div className="row mb-2">
          <div class="form-group col-sm-6 col-xs-12">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" class="form-control border-primary" required />
          </div>
          <div class="form-group col-sm-6 col-xs-12">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" class="form-control border-primary" required />
          </div>
          <div class="form-group col-sm-6 col-xs-12">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" class="form-control border-primary" required />
          </div>
          <div class="form-group col-sm-6 col-xs-12">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" class="form-control border-primary" required />
          </div>


          </div>
      
      <button type="submit" class="btn btn-primary">Realizar Reserva</button>
    </form>
      </article>
    </section>
    </main>
    
  )
}

