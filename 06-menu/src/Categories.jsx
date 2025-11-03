import React from 'react'

const Categories = ({categories, categoryItem}) => {
  return (
    <>
        {categories.map((category) => {
            return(
                <button type="button" className='btn' key={category} onClick={()=> categoryItem(category)}>{category}</button>
            )
        })}
   </>
  )
}

export default Categories
