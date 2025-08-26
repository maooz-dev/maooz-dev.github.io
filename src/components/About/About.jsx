import React from 'react';
import './About.css';
import theme from "../../assets/theme.png"; 
import Mprofile from "../../assets/Mprofile.jpg";

const About = () => {
  return (
    <div id='about' className='About'>
      <div className='About-title'>
        <h1>ABOUT ME</h1>
        <img src={theme} alt="" />
      </div>
      {/* Div About Section */}
      <div className='About-section'>
        <div className='About-left'>
        <img src={Mprofile} alt="" />
        </div>
        <div className='About-right'>
            <div className='About-para'>
                <p>I’m a passionate web developer dedicated to crafting clean, responsive, and user-friendly websites.</p>
                <p>I love solving problems through code and continuously learning to stay ahead in the ever-evolving tech world.</p>
            </div>
            <div className='About-skills'>
                <div className='About-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className='About-skill'><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className='About-skill'><p>TypeScript</p><hr style={{width:"60%"}}/></div>
                <div className='About-skill'><p>React.js</p><hr style={{width:"50%"}}/></div>

            </div>
        </div>

      </div>
      <div className='About-achivments'>
        <div className='About-achivment'>
            <h1>1.5+</h1>
            <h1>YEARS OF EXPERIENCE</h1>

        </div>
        <hr/>
        <div className='About-achivment'>
            <h1>3 or 4</h1>
            <h1>PrROJECT COMPLETED</h1>

        </div>
        <hr/>
        <div className='About-achivment'>
            <h1>5+</h1>
            <h1>HAPPY CLIENTS</h1>

        </div>
        <hr/>
      </div>
    </div>
  );
};

export default About;
