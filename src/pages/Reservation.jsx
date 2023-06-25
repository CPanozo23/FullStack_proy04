export const Reservation = () =>  {

  const reservationText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem repudiandae fuga? Illo, ea ex cumque eaque sequi veniam aperiam, laboriosam minima esse atque fugit molestiae distinctio, harum error voluptas.
  Necessitatibus accusamus culpa sed, neque itaque minus rerum ut aspernatur, quidem molestiae officia libero ad tenetur. Veniam culpa quas quam sunt aliquid accusamus ea, dolor repellat consectetur corporis vero quod.
  Ipsam aliquid quas, dolorum suscipit iste recusandae ut aspernatur. Voluptatibus perspiciatis sequi odio doloremque neque porro distinctio, voluptatem quis sint ea consectetur. Voluptas asperiores sapiente, ipsam laborum dicta ipsa voluptatem.
  Mollitia ut illum molestias exercitationem explicabo accusamus nesciunt dolor, nihil fuga saepe nostrum adipisci debitis optio illo maxime quos aut velit ullam autem rerum laborum. Consequatur reiciendis unde expedita adipisci.
  Magni natus ad consectetur eius accusamus quis asperiores dignissimos unde rerum mollitia a doloribus beatae sint autem nostrum nihil esse sunt obcaecati voluptatem vel, eos est nesciunt iste labore? Eius.
  Blanditiis deleniti iure nihil obcaecati reiciendis. Sint autem quia rem possimus ipsa dolor reprehenderit molestias animi voluptates? Perspiciatis repellendus nesciunt necessitatibus, nostrum consequuntur tempore quisquam maiores ea reprehenderit eligendi iusto?`;

  return(
    <main class="reservation">
      <img src="./img/reserved.jpg" alt="" />
        <section class="container">
        <h1 className=" d-flex align-items-center">
        <span class="material-symbols-outlined">restaurant</span>
        Reservaciones
      </h1>
      <article className=''>
        <form>
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

