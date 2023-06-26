import { useEffect, useState } from 'react'
import { SlideShow } from '../components/SlideShow';
import { db } from '../firebase/firebase'


export const Menu = () => {
  const [infoMenu, setInfoMenu] = useState([])
  
  useEffect(() => {
    readDataMenu()
  }, [])

  const readDataMenu = async () => {
    db.collection('menu').onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setInfoMenu(docs)
    })
  }
  
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
            {infoMenu.map((el) => (            
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${el.id}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${el.id}`}
                  >
                    <span className="material-symbols-outlined">{el.iconMaterial}</span> &nbsp; {el.category}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${el.id}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {el.products.map((product) => (            
                      <div className="row border-bottom">
                        <div className="col-10 col-xl-11 col-lg-11 col-md-11 col-sm-10 col-xs-8">{product.productname} <br/> <span className="text-secondary">{product.description}</span> </div>
                        <div className="col-2 col-xl-1  col-lg-1 col-md-1 col-sm-2 col-xs-4 text-end"><strong>${product.value}</strong></div>                       
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