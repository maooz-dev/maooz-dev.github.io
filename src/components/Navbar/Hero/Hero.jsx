import React from 'react'
import './Hero.css'
import Mprofile from "../../../assets/Mprofile.jpg";


const Hero = () => {
  return (
    <div id='home' className='Hero'>
      <img src={Mprofile} alt="" />
      <h1><span>I'm Maooz Khan</span>,FrontEnd Developer Based In Pakistan </h1>
      <p className='pera'>I have experience in building websites using HTML, CSS, JavaScript, and React.I can create clean and user-friendly designs.I know how to make pages work well on mobile and desktop.I can connect front-end with back-end data when needed.</p>
       {/* Hero Action */}
       <div className='Hero-action'> 
        <div className='Hero-connect'>Hero Connect With Me</div>
        <div className='Hero-resume'>My Resunme</div>

       </div>
    </div>
  )
}

export default Hero
