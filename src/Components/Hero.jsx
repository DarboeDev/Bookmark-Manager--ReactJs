import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
       <div className="hero-dec">
        <h1> A Simple Bookmark Manage</h1>
        <p>A clean and simple interface to organize your favourite 
            websites. Open a new browser tab and see your sites load 
            instantly. Try it for free.</p>
            <div className="btn-container">
                <button className="btn-blue">Get it on Chrome</button>
                <button className="firefox">Get it on Firefox</button>
            </div>
       </div>
       <div className="hero-img">
        <img src="src\assets\illustration-hero.svg" alt="" />
       </div>
    </section>
  )
}

export default Hero