import React from 'react'
import {nanoid } from 'nanoid'
import SingleColor from './SingleColor'

const ColorList = ({colors}) => {
  return (
    <div className='colors'>
        {console.log({colors})}
        
      {colors.map((color, index) => {
        return(
          <SingleColor color = {color} key={nanoid()} index={index}/>
        )
      })}
    </div>
  )
}

export default ColorList
