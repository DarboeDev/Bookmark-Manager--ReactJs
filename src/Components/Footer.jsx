import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
const Footer = () => {
  return (
    <footer>
        <div className="contact">
            <h5>35,000+ already joined</h5>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form action="">
                <div>
                <input type="text" placeholder='Enter your email address' />
                </div>
                <button className='red-btn'>Contact Us</button>
            </form>
        </div>
        <div className="footer">
            <div className="footer-nav">
                <img src=".\src\assets\logo-bookmark.svg" alt="" />
                <Link to="hero" smooth={true} duration={500}>Home</Link>
                <Link to="features" smooth={true} duration={500}>Features</Link>
                <Link to="extensions" smooth={true} duration={500}>Extensions</Link>
                <Link to="footer" smooth={true} duration={500}>Contact</Link>
            </div>
            <div className="s-media">
                <img src=".\src\assets\icon-facebook.svg" alt="" />
                <img src=".\src\assets\icon-twitter.svg" alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer