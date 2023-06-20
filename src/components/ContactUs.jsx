export const ContactUs = () => {
    return (
        <section id="ContactUs" className="bg-light my-0 p-0">
            <div className="container py-1 my-0">
            <h1 className=" d-flex align-items-center">
                <span class="material-symbols-outlined">connect_without_contact</span>
                Contacto
            </h1>
            <div class="card">
  <div class="row no-gutters">
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
      <img src="https://raw.githubusercontent.com/CPanozo23/FullStack_proy04/master/src/assets/img/pxfuel.jpg" class="card-img imgContact" alt="Imagen" />
        
        <div class="card-body">
            <h3 class="card-title">¿Quieres contactarnos?</h3>
            <p class="card-text d-flex align-items-center">
            <span class="material-symbols-outlined text-danger mx-2">nest_clock_farsight_analog</span>
            Horario de atención: 12:00 a 23:00 horas.
            </p>
            <p className="card-text d-flex align-items-center">
                <span className="material-symbols-outlined mx-2 text-primary">location_on</span>
                Ubicación: Matta 1234, Antofagasta.
            </p>
            <p className="card-text d-flex align-items-center">
                <span className="material-symbols-outlined mx-2 text-danger">perm_phone_msg</span>
                Teléfono: +56 9 1234 5678</p>
            <p className="card-text d-flex align-items-center">
                <span className="material-symbols-outlined mx-2 text-primary">mail</span>
                Correo: hola@labarrera.cl
            </p>
        </div>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
      <div class="card-body">
        
        <h3>Formulario</h3>
                <form action="/enviar" method="post">
                    <div class="form-group">
                        <label for="asunto">Asunto:</label>
                        <select class="form-control" id="asunto" name="asunto" required>
                        <option value="">Seleccione una opción</option>
                        <option value="consulta">Consulta</option>
                        <option value="felicitaciones">Felicitaciones</option>
                        <option value="reclamo">Reclamo</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" name="email" required />
                    </div>

                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required />
                    </div>

                    <div class="form-group">
                        <label for="apellido">Apellido:</label>
                        <input type="text" class="form-control" id="apellido" name="apellido" required />
                    </div>

                    <div class="form-group">
                        <label for="mensaje">Mensaje:</label>
                        <textarea class="form-control" id="mensaje" name="mensaje" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary mt-3">Enviar</button>
                    </form>

        
      </div>
    </div>
  </div>
</div>
  
            </div>
        </section>
    )
}