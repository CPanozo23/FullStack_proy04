import { useEffect, useState } from 'react'
import { SlideShow } from '../components/SlideShow';


export const Menu = () => {

  const init = localStorage.getItem('productosLaBarrera')
    ? JSON.parse(localStorage.getItem('productosLaBarrera'))
    : [];

  const [productosLaBarrera, setProductosLaBarrera] = useState(init);

  useEffect(() => {

    const productosLaBarrera = [
        {
          categoria: 'Aperitivos',
          iconMaterial: 'local_bar',
          productos: [
            { nombreProducto: 'Pisco Sour Criollo', descripcion: '', valor: 3900 },
            { nombreProducto: 'Catedral Criollo', descripcion: '', valor: 5900 },
            { nombreProducto: 'Catedral Peruano', descripcion: '', valor: 7400 },
            { nombreProducto: 'Sour Peruano', descripcion: '', valor: 5400 },
            { nombreProducto: 'Aperol Spritz', descripcion: '', valor: 5300 },
            { nombreProducto: 'Ramazzotti Sprits', descripcion: '', valor: 5100 },
            { nombreProducto: 'Margarita', descripcion: '', valor: 5900 },
            { nombreProducto: 'Negroni', descripcion: '', valor: 5800 },
            { nombreProducto: 'Caipiriña', descripcion: '', valor: 4900 },
            { nombreProducto: 'Caipiroska', descripcion: '', valor: 4900 }
          ]
        },
        {
          categoria: 'Cervezas',
          iconMaterial: 'sports_bar',
          productos: [
            { nombreProducto: 'Caipiroska', descripcion: '', valor: 4500 },
            { nombreProducto: 'Austal Calafate', descripcion: '', valor: 4500 },
            { nombreProducto: 'Corona Extra', descripcion: '', valor: 3400 },
            { nombreProducto: 'Mahou 5 estrellas (Lager)', descripcion: '', valor: 3600 },
            { nombreProducto: 'Kunstmann Torobayo', descripcion: '', valor: 4500 },
            { nombreProducto: 'Kunstmann Book', descripcion: '', valor: 4500 },
            { nombreProducto: 'Mahou 00° Tostada ( sin alcohol)', descripcion: '', valor: 4500 },
            { nombreProducto: 'Cristal Cero', descripcion: '', valor: 3200 },
            { nombreProducto: 'Heineken', descripcion: '', valor: 3400 },
            { nombreProducto: 'Royal Guard', descripcion: '', valor: 3200 },
            { nombreProducto: 'Kross Golden Ale', descripcion: '', valor: 4200 }
          ]
        },
        {
          categoria: 'Entradas y picoteos',
          iconMaterial: 'cookie',
          productos: [
            { nombreProducto: 'Causeo de patitas con salsa verde y aceitunas', descripcion: '', valor: 5590 },
            { nombreProducto: 'Empanaditas de plateada', descripcion: '2 unidades', valor: 3090 },
            { nombreProducto: 'Empanaditas de queso', descripcion: '2 unidades', valor: 3090 },
            { nombreProducto: 'Empanaditas de queso camarón', descripcion: '2 unidades', valor: 3290 },
            { nombreProducto: 'Provoleta al orégano', descripcion: '', valor: 5890 },
            { nombreProducto: 'Machas a la parmesana', descripcion: '6 unidades', valor: 8290 },
            { nombreProducto: 'Ostiones a la parmesana', descripcion: '6 unidades', valor: 8290 },
            { nombreProducto: 'Camarones ecuatorianos al ajillo', descripcion: '10 unidades', valor: 8290 },
            { nombreProducto: 'Tártaro de Salmón', descripcion: 'Trozos de Salmón, palta, tomate, pepinillo, alcaparras y un toque de mayo.', valor: 9990 },
            { nombreProducto: 'Ceviche La Barrera', descripcion: 'Salmón, camarones ecuatorianos, cubos de palta y cebolla morada.', valor: 12190 }
          ]
        },
        {
          categoria: 'Especialidades Criollas',
          iconMaterial: 'soup_kitchen',
          productos: [
            { nombreProducto: 'Platada La Barrera', descripcion: 'Plateada al horno c/ pastelera de choclo y mini ensalada chilena.', valor: 13390 },
            { nombreProducto: 'Plateada rústica', descripcion: 'Plateada al horno cubierta de salteado de tocino, champiñones, cebolla y merkén.', valor: 12190 },
            { nombreProducto: 'Plateada a la criolla en greda', descripcion: 'Cubos de plateada en su caldo con salteado de tomate, cebolla, pimentón y ají verde.', valor: 12190 },
            { nombreProducto: 'Surtido La Barrera', descripcion: 'Arrollado, costillar ahumado, longaniza y papa cocida.', valor: 14590 },
            { nombreProducto: 'Cazuela de ave', descripcion: '', valor: 9690 },
            { nombreProducto: 'Cazuela de vacuno', descripcion: '', valor: 11890 },
            { nombreProducto: 'Caldillo de congrio', descripcion: '', valor: 12990 },
            { nombreProducto: 'Merluza austral a la vasca', descripcion: 'Filete de merluza cocinado al vapor con reducción de vino blanco, tomate, cebolla y orégano.', valor: 12990 },
            { nombreProducto: 'Filete al ajillo', descripcion: 'Cubos de filete salteados con ajo, cacho de cabra y perejil, servido en librillo de greda.', valor: 12790 },
            { nombreProducto: 'Filete La Barrera', descripcion: 'Sellado en aceite de oliva y un toque de ajo, flambeado en coñac y servido en rodajas', valor: 12790 }
          ]
        },
        {
            categoria: 'A la parrilla',
          iconMaterial: 'kebab_dining',
            productos: [
              { nombreProducto: 'Lomo liso', descripcion: '250 grs', valor: 10590 },
              { nombreProducto: 'Bife de chorizo vetado', descripcion: '400 grs', valor: 16390 },
              { nombreProducto: 'Filete parrillero', descripcion: '250 grs', valor: 12790 },
              { nombreProducto: 'Entraña Angus americana', descripcion: '', valor: 17890 },
              { nombreProducto: 'Pollo deshuesado al limón', descripcion: '', valor: 8890 }
            ]
          },
          {
            categoria: 'Pescados',
          iconMaterial: 'set_meal',
            productos: [
              { nombreProducto: 'Merluza austral a la plancha', descripcion: '', valor: 11290 },
              { nombreProducto: 'Merluza austral frita', descripcion: '', valor: 11290 },
              { nombreProducto: 'Congrio a la plancha', descripcion: '', valor: 12590 },
              { nombreProducto: 'Congrio frito', descripcion: '', valor: 13290 },
              { nombreProducto: 'Reineta a la plancha', descripcion: '', valor: 10990 },
              { nombreProducto: 'Salmón a la plancha', descripcion: '', valor: 12290 }
            ]
          },  
          {
            categoria: 'Agregados',
          iconMaterial: 'rice_bowl',
            productos: [
              { nombreProducto: 'Papas', descripcion: 'fritas / chaucha / hilo / al vapor / salteadas', valor: 3390 },
              { nombreProducto: 'Papas La Barrera', descripcion: 'Salteadas con cebolla, ajo y merkén.', valor: 3390 },
              { nombreProducto: 'Arroz', descripcion: '', valor: 2990 },
              { nombreProducto: 'Verduras salteadas', descripcion: '', valor: 4090 },
              { nombreProducto: 'Champiñones salteados', descripcion: '', valor: 4590 },
              { nombreProducto: 'Espinacas a la crema', descripcion: '', valor: 4990 }
            ]
          },
          {
            categoria: 'Jugos y Bebidas',
          iconMaterial: 'water_full',
            productos: [
              { nombreProducto: 'Jugos naturales', descripcion: 'Consulta sabores disponibles.', valor: 3390 },
              { nombreProducto: 'Limonada tradicional', descripcion: '', valor: 3300 },
              { nombreProducto: 'Limonada menta jengibre', descripcion: '', valor: 3700 },
              { nombreProducto: 'Bebidas', descripcion: '', valor: 2300 },
              { nombreProducto: 'Agua Mineral Puyehue', descripcion: '', valor: 2800 }
            ]
          },
      ]

    localStorage.setItem('productosLaBarrera', JSON.stringify(productosLaBarrera));

    if (init.length === 0) {
      setProductosLaBarrera(productosLaBarrera);
    } else {
      setProductosLaBarrera(init);
    }
  }, []);

  return (
    <main className="">
            <SlideShow />
      <section className="container">
        <h1 className=" d-flex align-items-center">
          <span className="material-symbols-outlined">menu_book</span>
          Menú
        </h1>
        <article className="">


          <div className="accordion accordion-flush" id="accordionFlushExample">
            {productosLaBarrera.map((categoria, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${index}`}
                  >
                    <span class="material-symbols-outlined">{categoria.iconMaterial}</span> &nbsp; {categoria.categoria}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {categoria.productos.map((producto, index) => (
                      <div key={index} className="row border-bottom">
                        <div className="col-10 col-xl-11 col-lg-11 col-md-11 col-sm-10 col-xs-8">{producto.nombreProducto} <br/> <span className="text-secondary">{producto.descripcion}</span> </div>
                        <div className="col-2 col-xl-1  col-lg-1 col-md-1 col-sm-2 col-xs-4 text-end"><strong>${producto.valor}</strong></div>
                        
                      </div>
                      
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </article>
      </section>
    </main>
  )
}