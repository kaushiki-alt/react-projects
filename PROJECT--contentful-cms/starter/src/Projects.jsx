import React from 'react'
import { useFetchProjects } from './fetchProjects'
const Projects = () => {
  const {loading, projects} = useFetchProjects()
  console.log(projects);
  

  if (loading) {
    return <section>loading...</section>
  }
  return (
    <section className='projects'>
      <div className="title">
        <h2>projects</h2>
      <div className="title-underline"></div>
      </div>
      
      <div className="projects-center">
        {projects.map((project)=> {
          const {id, title, url, img} = project;
          return (
  <a href={url} className="project" key={id} target='_blank'>
  <img src={img} alt={title} className="img"  />
  <h5>{title}</h5>
  </a>
          )
        })}
      </div>

    </section>
  )
}

export default Projects
