import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme.png'
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='My-work'>
        <div className='Mywork-title'>
            <h1>My Latest Work</h1>
            <img src={theme}/>
             </div>
             {/* Container */}
             <div className='Mywork-container'>
              {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img}/>
              })}

             </div>
             <div className='Mywork-showmore'>
                <p>Show More</p>
                <img src={arrow_icon} alt="" />

             </div>
      
    </div>
  )
}

export default MyWork
