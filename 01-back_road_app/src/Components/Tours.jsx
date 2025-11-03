import React from 'react'
import { tours } from '../data'

const Tours = () => {
  return (
    <div>
            <section className="section" id="tours">
        <div className="section-title">
          <h2>featured <span>tours</span></h2>
        </div>

        <div className="section-center featured-center">
          {tours.map((tour) =>{
            const {id, img, date, title, text, icon, location, duration, price } = tour
            return(
          <article className="tour-card0" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p> {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className={icon}></i></span> {location}
                </p>
                <p>{duration}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>

            )
          })}
        </div>
      </section>

    </div>
  )
}

export default Tours
