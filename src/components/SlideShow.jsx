import React from 'react'
import img1 from '../../public/img/pxfuel'
export const SlideShow = () => {
  const imageUrls = [
    img1,
    './img/pxfuel2.jpg',
    '/img/pxfuel3.jpg',
  ]

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {imageUrls.map((url, index) => (
          <button 
          key={index} type="button" data-bs-target= "#carouselExampleAutoplaying" data-bs-slide-to={index} className={index === 0 ? "active" : ""}
          aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1} `}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imageUrls.map((url, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={url} className="d-block w-100" alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default SlideShow;