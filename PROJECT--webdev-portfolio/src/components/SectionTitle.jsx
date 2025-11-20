import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='border-b pb-5 border-gray-200'>
      <h2 className='capitalize text-3xl font-medium tracking-wider'>{title}</h2>
    </div>
  )
}

export default SectionTitle
