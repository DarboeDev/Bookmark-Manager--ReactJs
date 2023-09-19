import { useState } from 'react'
import Navbar from './Components/NavBar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Extensions from './Components/Extensions'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


import './App.css'
function App() {

  return (
    <>
     <Navbar/>
     <div className="content">
     <Element name="hero" className="element">
         <Hero/>
      </Element>
     <Element name="features" className="element">
         <Features/>
      </Element>
     <Element name="extensions" className="element">
         <Extensions/>
      </Element>
     <Element name="accordion" className="element">
          <FAQ/>
        </Element>
     <Element name="footer" className="element">
       <Footer/>
      </Element>
     </div>
    </>
  )
}

export default App
