import { useEffect, useState } from 'react'

export const Blog = () =>  {
  const init = localStorage.getItem('blogLaBarrera')
  ? JSON.parse(localStorage.getItem('blogLaBarrera'))
  : [];

const [blogLaBarrera, setBlogLaBarrera] = useState(init);

useEffect(() => {

  const blogLaBarrera = [
      {
        categoria: 'Comida Tradicional',
        titulo: 'Empanada: Típica chilena',
        urlImg: 'https://media.istockphoto.com/id/1373003601/photo/pasties-filled-with-meat-and-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=dIzGVKC9VD5jieFauUyFi6qqBgURFSyzDys-iQbRC4g=',
        parrafos: ['La empanada es un plato típico y popular en Chile que ha sido parte integral de su cultura culinaria durante siglos. Su origen se remonta a la época de la conquista española en América Latina, cuando los colonizadores españoles trajeron consigo sus tradiciones culinarias, incluyendo las empanadas.',
        'La empanada es un tipo de pastel o masa rellena que puede variar en forma y contenido dependiendo de la región. En el caso de Chile, la empanada se caracteriza por su forma semicircular y su relleno tradicional de carne, cebolla, aceitunas, pasas, huevo duro y condimentos. Sin embargo, también existen otras variantes regionales como la empanada de mariscos, la empanada de pino (con carne molida y cebolla) y la empanada de queso.',
        'La popularización de la empanada en Chile como una comida típica se atribuye en gran medida a la influencia española y su adaptación a los ingredientes locales. Durante la época colonial, los españoles introdujeron técnicas de cocina, ingredientes y recetas que se fusionaron con los productos autóctonos, dando origen a la cocina mestiza latinoamericana.',        
        'A medida que la empanada se arraigaba en la cultura chilena, comenzó a evolucionar y adquirir características propias. La influencia indígena se hizo presente en el uso de ingredientes autóctonos como el ají, el cilantro y el pebre, una salsa picante a base de tomates y ajíes. Estos ingredientes le dieron un toque distintivo a las empanadas chilenas, añadiendo sabores únicos y una combinación de especias que se convirtieron en parte esencial de su identidad culinaria.',        
        'Con el tiempo, la empanada se popularizó aún más y se convirtió en una comida típica de celebraciones y festividades en Chile. En particular, se asocia estrechamente con las fiestas patrias chilenas, que conmemoran la independencia del país. Durante estas festividades, las empanadas son parte integral de la comida tradicional y se consumen en grandes cantidades.',
        'La empanada también ha trascendido las barreras sociales y económicas en Chile, convirtiéndose en un alimento accesible y querido por personas de todas las clases sociales. Se pueden encontrar en restaurantes, fondas, puestos de comida callejera y hogares chilenos, siendo consideradas una comida reconfortante y familiar.',
        'En la actualidad, la empanada sigue siendo un ícono de la cocina chilena y es apreciada tanto a nivel nacional como internacional. Incluso ha trascendido las fronteras de Chile y se ha popularizado en otros países de América Latina y en diversas partes del mundo, gracias a la diáspora chilena y a la difusión de su cultura gastronómica.',
        'En conclusión, la empanada se convirtió en una comida típica de Chile gracias a la influencia española y a la adaptación de ingredientes y técnicas culinarias locales. A lo largo de los siglos, se ha arraigado en la cultura chilena, evolucionando y adquiriendo características propias que la hacen única. Hoy en día, la empanada']
      }, 
      {
        categoria: 'Tradición Criolla',
        titulo: 'La Tirana',
        urlImg: 'https://vulcanopro.s3.amazonaws.com/images/lar_I6XwJwCo5Lh68Yp6KiIsEXFzBs9oawBjhmxOnM9A.jpeg',
        parrafos: ['La Fiesta de La Tirana es una de las festividades religiosas más importantes y coloridas de Chile. Se lleva a cabo en el pueblo de La Tirana, ubicado en la Región de Tarapacá, durante los días 16 y 17 de julio. Esta festividad es una mezcla de tradiciones religiosas y culturales que combina elementos cristianos con influencias indígenas.',
        'La Fiesta de La Tirana rinde homenaje a la Virgen del Carmen, la patrona de Chile. Durante los días de celebración, miles de peregrinos llegan al pueblo vestidos con trajes tradicionales y se lleva a cabo una serie de actividades religiosas y culturales. La festividad incluye procesiones, bailes folclóricos, música, fuegos artificiales y coloridos desfiles. Los participantes danzan y cantan al ritmo de la música, mezclando influencias indígenas, europeas y africanas. Además, se realizan representaciones teatrales de la lucha entre el bien y el mal, conocidas como "Diabladas".',
        'La Fiesta de La Tirana es una manifestación única de la identidad cultural de Chile y una oportunidad para celebrar la fe, la tradición y la diversidad cultural del país. Atrae a visitantes de todo Chile y también a turistas internacionales que desean presenciar esta festividad vibrante y llena de energía.',        
        'Estas tres tradiciones criollas, la cueca, las Fiestas Patrias y la Fiesta de La Tirana, ejemplifican la riqueza y diversidad cultural de Chile, mostrando la importancia de la música, la danza, la religión y las celebraciones en la vida cotidiana del país.']
      }
    ]

  localStorage.setItem('blogLaBarrera', JSON.stringify(blogLaBarrera));

  if (init.length === 0) {
    setBlogLaBarrera(blogLaBarrera);
  } else {
    setBlogLaBarrera(init);
  }
}, []);

return (
  <main className="">
    <section className="container">
      <h1 className=" d-flex align-items-center">
        <span className="material-symbols-outlined">news</span>
        Blog
      </h1>

      {blogLaBarrera.map((blog, index) => (
        <article className="container blog">
            <img src={blog.urlImg} alt='' className='imgBlog'/>

            <h2 className='mt-3'>{blog.categoria}</h2>
              <h3>{blog.titulo}</h3>
          
          {blog.parrafos.map((parrafo) => (
            <p>{parrafo}</p>          
      ))}

        </article>           
        ))}
     
      

  
    </section>
  </main>
    )
  }
  
  