import { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'

export const Blog = () => {
  const [infoBlog, setInfoBlog] = useState([])
  
  useEffect(() => {
    readDataBlog()
  }, [])

  const readDataBlog = async () => {
    db.collection('blog').onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setInfoBlog(docs)
    })
  }

  return (
    <main className="">
      <section className="container">
        <h1 className=" d-flex align-items-center">
          <span className="material-symbols-outlined">news</span>
          Blog
        </h1>
        {infoBlog.map((el) => (
          <article className="container blog">
            <img src={el.urlImg} alt='' className='imgBlog' />
            <h2 className='mt-3'>{el.category}</h2>
            <h3>{el.title}</h3>
            {el.paragraphs.map((parrafo) => (
              <p>{parrafo}</p>
            ))}
          </article>
        ))}
      </section>
    </main>
  )
}

