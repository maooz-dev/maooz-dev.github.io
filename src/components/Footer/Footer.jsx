import React from 'react'
import './Footer.css'
import Mlogo from '../../assets/Mlogo.jpg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-top'>
            <div className='Footer-top-lef'>
                <img src={Mlogo} alt="" />
                <p>I’m a passionate web developer dedicated to crafting clean, responsive, and user-friendly websites.</p>
                 
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className='Subscribe'>Subscribe</div>

            </div>
        </div>
       <hr/>
       <div className='footert-bottom'>
        <p className='footer-bottome-left'>© 2025 Maooz Khan. All rights reserved. | Designed & Developed with ❤️ by Maooz</p>
        <div className='footer-bottom-right'>
            <p>Term Servicess</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>

        </div>
       </div>
    </div>
  )
}

export default Footer
