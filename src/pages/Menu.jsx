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
        productos: [
          { nombreProducto: 'Aperitivo 1', descripcion: 'Descripción 1', valor: 500 },
          { nombreProducto: 'Aperitivo 2', descripcion: 'Descripción 2', valor: 1000 }
        ]
      },
      {
        categoria: 'Cervezas',
        productos: [
          { nombreProducto: 'Cerveza 1', descripcion: 'Descripción cerveza 1', valor: 30 },
          { nombreProducto: 'Cerveza 2', descripcion: 'Descripción cerveza 2', valor: 50 }
        ]
      },
      {
        categoria: 'Entradas y picoteos',
        productos: [
          { nombreProducto: 'Entradas y picoteos 1', descripcion: 'Descripción Entradas y picoteos 1', valor: 30 },
          { nombreProducto: 'Entradas y picoteos 2', descripcion: 'Descripción Entradas y picoteos 2', valor: 500 }
        ]
      }
    ];

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
                    {categoria.categoria}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {categoria.productos.map((producto, index) => (
                      <div key={index}>
                        {producto.descripcion} | {producto.valor}
                        <hr/ >
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
  );
};
