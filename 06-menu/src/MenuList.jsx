import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        return(
            <MenuItem {...item} key={item.id}/>
        )
      })}
    </div>
  )
}

export default MenuList
