import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300 block'>
      <img src={img} alt={title} className='rounded-t-lg object-cover w-full h-64' />
      <div className="p-8 capitalize">
      <h2 className='text-xl font-medium tracking-wider'>{title}</h2>
      <p className="mt-4 leading-loose text-slate-700">{text}</p>

      <div className="mt-4 flex gap-4">
        <a href={url}>
            <TbWorldWww className='size-8 text-slate-500 hover:text-black duration-300'/>
        </a>
        <a href={url}>
            <FaGithubSquare className='size-8 text-slate-500 hover:text-black duration-300'/>
        </a> 
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
