import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const Carousel = ({ profile, current}) => {
    return (
        <section>
            {profile.map((person, index) => {
            const {id, image, name , title, quote} = person;
                return(
                    <div key={id} className='slide' style={{transform: `translateX(${100 * (index - current)}%)`, opacity:index === current ? 1 : 0, visibility: index === current ? 'visible': 'hidden'}}>
                        <img src={image} alt={name} className="person-img" />
                        <h5 className="name">{name}</h5>
                        <p className="title">{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon'/>
                    </div>

                )
            })}
        </section>
    )
}

export default Carousel
