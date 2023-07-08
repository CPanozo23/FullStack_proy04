export const AboutUs = () => {
  return (
    <section id="AboutUs" className=" bg-light p-0 my-0">
      <article className="container py-1 my-0">
        <h1 className=" d-flex align-items-center">
          <span className="material-symbols-outlined">food_bank</span>
          Sobre nosotros
        </h1>

        <div className="card">
          <div className="row no-gutters">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <img src="./img/about.jpg" className="card-img imgAbout" alt="imagen Sobre nosotros" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="card-body">
                <h5 className="card-title">"La Barrera: Sabores Auténticos de la Cocina Chilena"</h5>
                <p className="card-text">
                  Nos especializamos en la deliciosa comida chilena tradicional. Con un ambiente acogedor y una atención amigable, el restaurante ofrece una amplia selección de platos clásicos que resaltan los sabores auténticos y característicos del país. Sus exquisitas especialidades son preparadas con ingredientes frescos y de alta calidad, que satisfacen los paladares más exigentes.

                  Con su compromiso inquebrantable de rescatar y preservar las recetas y tradiciones culinarias, La Barrera ofrece a los comensales una experiencia gastronómica inolvidable que celebra la rica y diversa cocina chilena. Ya sea que los visitantes sean locales o turistas, se sentirán como en casa en este encantador restaurante, disfrutando de platos caseros que destacan por su sabor y autenticidad. La Barrera, el lugar perfecto para sumergirse en los sabores tradicionales de Chile y disfrutar de una experiencia culinaria que deleitará los sentidos.
                </p>
                <hr className="m-0 p-0" />
                <div className="container text-center fw-bold">
                  <div className="row">
                    <div className="col">
                      Nacimiento <br /> <span>2023</span>
                    </div>
                    <div className="col">
                      Ranking <br />
                      <span className="material-symbols-outlined text-warning ">star</span>
                      <span className="material-symbols-outlined text-warning ">star</span>
                      <span className="material-symbols-outlined text-warning ">star</span>
                      <span className="material-symbols-outlined text-warning ">star</span>
                      <span className="material-symbols-outlined text-warning ">star</span>

                    </div>
                  </div>
                  <div>
                    Ubicación <br /> <span >Matta 1234, Antofagasta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}