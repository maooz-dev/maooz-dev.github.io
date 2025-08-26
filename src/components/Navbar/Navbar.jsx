import React, { useRef, useState } from 'react'
import './Navbar.css'
import Mlogo from '../../assets/Mlogo.jpg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isOpen, setIsOpen] = useState(false)   
  const menuRef = useRef()

  return (
    <div className='Navbar'>
      {/* Logo */}
      <img src={Mlogo} alt="logo" />

      {/* Open (hamburger) button - sirf jab menu close ho */}
      {!isOpen && (
        <img 
          className="menu_open" 
          src={menu_open} 
          alt="open menu" 
          onClick={() => setIsOpen(true)}   
        />
      )}

      {/* Nave-menu */}
      <ul ref={menuRef} className={`Nave-menu ${isOpen ? "active" : ""}`}>  
        {/* Close button - sirf jab menu open ho */}
        {isOpen && (
          <img 
            className="Nav-mob-close" 
            src={menu_close} 
            alt="close menu" 
            onClick={() => setIsOpen(false)}   
          />
        )}

        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className='AnchorLink' offset={50} href='#home'>
            <p onClick={() => {setMenu("home"); setIsOpen(false)}}>HOME</p>
          </AnchorLink>
          <img src={underline} alt='' />
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className='AnchorLink' offset={50} href='#about'>
            <p onClick={() => {setMenu("about"); setIsOpen(false)}}>ABOUT</p>
          </AnchorLink>
          <img src={underline} alt='' />
        </li>

        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className='AnchorLink' offset={50} href='#services'>
            <p onClick={() => {setMenu("services"); setIsOpen(false)}}>SERVICES</p>
          </AnchorLink>
          <img src={underline} alt='' />
        </li>

        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className='AnchorLink' offset={50} href='#work'>
            <p onClick={() => {setMenu("work"); setIsOpen(false)}}>WORK</p>
          </AnchorLink>
          <img src={underline} alt='' />
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className='AnchorLink' offset={50} href='#contact'>
            <p onClick={() => {setMenu("contact"); setIsOpen(false)}}>CONTACT</p>
          </AnchorLink>
          <img src={underline} alt='' />
        </li>
      </ul>

      {/* Connect Button (desktop only) */}
      <div className='Nave-connect'>
        <AnchorLink className='AnchorLink' offset={50} href='#contact'>
          <p onClick={() => setMenu("contact")}>Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
