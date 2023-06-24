export const ContactUs = () => {
    return (
        <section id="ContactUs" className="bg-light my-0 p-0">
            <div className="container py-1 my-0">
            <h1 className=" d-flex align-items-center">
                <span className="material-symbols-outlined">connect_without_contact</span>
                Contacto
            </h1>
            <div className="card">
  <div className="row no-gutters">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
      <img src="https://raw.githubusercontent.com/CPanozo23/FullStack_proy04/master/src/assets/img/pxfuel.jpg" class="card-img imgContact" alt="Imagen" />
        
        <div className="card-body">
            <h3 className="card-title">¿Quieres contactarnos?</h3>
            <p className="card-text d-flex align-items-center">
            <span className="material-symbols-outlined text-danger mx-2">nest_clock_farsight_analog</span>
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
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
      <div className="card-body">
        
        <h3>Formulario</h3>
                <form action="/enviar" method="post">
                    <div className="form-group">
                        <label htmlFor="asunto">Asunto:</label>
                        <select className="form-control" id="asunto" name="asunto" required>
                        <option value="">Seleccione una opción</option>
                        <option value="consulta">Consulta</option>
                        <option value="felicitaciones">Felicitaciones</option>
                        <option value="reclamo">Reclamo</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" className="form-control" id="apellido" name="apellido" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea className="form-control" id="mensaje" name="mensaje" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Enviar</button>
                    </form>

        
      </div>
    </div>
  </div>
</div>
  
            </div>
        </section>
    )
}