import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import heroImg from '../project-assets/hero.svg'

const Hero = () => {
    return (
        <section className='bg-emerald-100 py-24'>
            <div className="align-element grid md:grid-cols-2 items-center  gap-8">
                <article>
                    <h1 className="text-7xl font-bold">
                        I'm Kaushiki
                    </h1>
                    <p className="text-3xl tracking-wider text-slate-700 capitalize mt-4 ">
                        Front-End Developer
                    </p>
                    <p className="capitalize text-slate-700 text-lg mt-2 tracking-wider">
                        turning ideas into interactive reality
                    </p>
                    <div className="flex mt-4 gap-4 ">
                        <a href="#">
                            <FaGithubSquare className='size-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href="#">
                            <FaLinkedin className='size-8 text-slate-500 hover:text-black duration-300'/>
                        </a>
                        <a href="#">
                            <FaTwitterSquare className='size-8 text-slate-500 hover:text-black duration-300'/>
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} className='h-80 lg:h-96' />
                </article>
            </div>
        </section>
    )
}

export default Hero
