import React from 'react'
export const SlideShow = () => {
  const imageUrls = [
    'https://raw.githubusercontent.com/CPanozo23/FullStack_proy04/master/src/assets/img/pxfuel.jpg',
    'https://raw.githubusercontent.com/CPanozo23/FullStack_proy04/master/src/assets/img/pxfuel2.jpg',
    'https://raw.githubusercontent.com/CPanozo23/FullStack_proy04/master/src/assets/img/pxfuel3.jpg',
  ]

  return (
    <div className="carousel slide" data-bs-interval="3000">
      <div className="carousel-inner">
        {imageUrls.map((url, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}