import React, {useState} from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  function handleToggle(){
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu);
  }
  return (
    <>
    {
      toggleMenu && (
        <nav className="menu">
          <div className="menu-header">
          <img src="./src/assets/logo-bookmark.svg" alt="menu-logo" />
          <img src=".\src\assets\icon-close.svg" onClick={()=> setToggleMenu(false)} alt="bookmark-logo" />
          </div>
          <div className="menu-links">
          <Link to="features" smooth={true} duration={500} onClick={()=> setToggleMenu(false)}>Features</Link>
          <Link to="extensions" smooth={true} duration={500} onClick={()=> setToggleMenu(false)} >Extensions</Link>
          <Link to="footer" smooth={true} duration={500} onClick={()=> setToggleMenu(false)}>Contact</Link>
          <Link to="" smooth={true} duration={500} className='menu-btn'>Login</Link>
          </div>
        </nav>
      )
    }
    <nav className="nav">
        <div className="logo">
            <img src="./src/assets/logo-bookmark.svg" alt="bookmark-logo" />
        </div>
        <div className="nav-links" >
        <Link to="features" smooth={true} duration={500}>Features</Link>
          <Link to="extensions" smooth={true} duration={500}>Extensions</Link>
          <Link to="footer" smooth={true} duration={500}>Contact</Link>
          <Link to="" smooth={true} duration={500} className='red-btn'>Login</Link>
        </div>
        {toggleMenu === false && <img onClick={()=> handleToggle()} src="./src/assets/icon-hamburger.svg" alt="" className="menu-img" />}
    </nav>
    </>
  )
}

export default Navbar