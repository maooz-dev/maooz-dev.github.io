import React from 'react'
import './Services.css'
import theme from "../../assets/theme.png";
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const Services = () => {
  return (
    <div id='services' className='Services'>
        <div className='Service-title'>
          <h1>My Services</h1>
          <img src={theme} alt="" />  
        </div>
        <div className='Services-container'>
            {services_data.map((Service,index)=>{
                return <div key={index} className='Services-formate'>
                    <h3>{Service.s_no}</h3>
                    <h2>{Service.s_name}</h2>
                    <p>{Service.s_desc}</p>
                    <div className='Services-readmore'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                
            })}

 
        </div>
    </div>
  )
}

export default Services
