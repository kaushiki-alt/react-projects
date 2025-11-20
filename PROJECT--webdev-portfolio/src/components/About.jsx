import React from 'react'
import aboutSvg from '../project-assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
    return (
        <section id='about' className='bg-white py-20'>
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} alt="" className='h-64 w-full' />

                <article>
                    <SectionTitle title="Code and Coffee" />
                    <p className='text-slate-600 leading-loose mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid eligendi officia minima! Eaque quidem voluptas velit odit, error iste tenetur? Necessitatibus error ut quod dicta aliquid, vel rerum qui.</p>
                </article>
            </div>

        </section>
    )
}

export default About
