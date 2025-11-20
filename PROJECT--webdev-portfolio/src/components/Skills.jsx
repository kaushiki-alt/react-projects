import React from 'react'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <section className='skills-section align-element  py-24'>
        <SectionTitle title="tech stack"/>
        
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => {
                return (
                    <SkillCard key={skill.id} {...skill}/>
                )
            })}
        </div>
    </section>
  )
}

export default Skills
