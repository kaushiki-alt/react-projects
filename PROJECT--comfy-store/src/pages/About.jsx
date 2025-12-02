import React from 'react'

const About = () => {
  return (
    <section>
    <div className="flex justify-center items-center gap-2 sm:gap-6">
      <h1 className="font-bold text-4xl sm:text-6xl tracking-tight leading-0">
        We love
      </h1>
      <div className="stats status-primary shadow">
        <div className="stat">
          <div className="stat-title text-4xl tracking-widest text-primary-content font-bold">
            comfy
          </div>
        </div>
      </div>

    </div>

    <p className="mt-6 leading-8 text-lg max-w-2xl mx-auto ">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
    </p>
    </section>
  )
}

export default About
