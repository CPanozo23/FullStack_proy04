export const AboutUs = () => {
    return (
        <section id="AboutUs" className=" bg-light p-0 my-0">
            <div className="container py-1 my-0">
                <h1 className=" d-flex align-items-center">
                    <span className="material-symbols-outlined">food_bank</span>
                    Sobre nosotros
                </h1>

                <div className="card">
  <div className="row no-gutters">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
      <img src="https://raw.githubusercontent.com/CPanozo23/FullStack_proy04/master/src/assets/img/pxfuel2.jpg" className="card-img imgAbout" alt="Imagen" />
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
      <div className="card-body">
        <h5 className="card-title">Título de la tarjeta</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis cupiditate a laborum tenetur fugit harum ipsam architecto exercitationem omnis reiciendis consequuntur eius accusantium placeat doloremque dolorem, dolor voluptatem? Illum.
        Aliquid autem nostrum neque id excepturi temporibus accusantium eligendi, mollitia voluptatibus natus asperiores obcaecati praesentium quae. Reiciendis quos vitae cum debitis. Deserunt, at nisi temporibus ipsa voluptatum nobis ipsam iste?
        </p>
        <hr className="m-0 p-0" />
        <div className="container text-center fw-bold">
            <div className="row">
                <div className="col">
                Nacimiento <br/> <span>2023</span>
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
            Ubicación <br/> <span >Matta 1234, Antofagasta</span>
            </div>
        </div>

        
        
        
      </div>
    </div>
  </div>
</div>


            </div>
        </section>
    )
}