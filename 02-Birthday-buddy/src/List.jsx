import React from 'react'
import './index.css'

const List = ({people}) => {
  return (
    <>
    {people.map((person) => {
       const {id, name, age, image} = person
       return (
    <div className='person' key={id}>
        <img src={image} alt="person" className='img' />
        <div>
        <h4 className="name">{name}</h4>
        <p className='age' >{age}</p>
        </div>
    </div>

       )
    })}
    </>
  )
}

export default List
