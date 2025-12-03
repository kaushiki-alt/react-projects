import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className="border-b border-base-300 p-5">
        <h2 className='font-medium capitalize text-3xl tracking-wider '>
            {text}
        </h2>
    </div>
  )
}

export default SectionTitle
