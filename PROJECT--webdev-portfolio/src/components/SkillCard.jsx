import React from 'react'

const SkillCard = ({icon, title, text}) => {
  return (
    <article className='flex flex-col gap-2'>
      <span>{icon}</span>
      <h2 className="font-bold mt-2">{title}</h2>
      <p className="text-slate-500">{text}</p>
         </article>
  )
}

export default SkillCard
