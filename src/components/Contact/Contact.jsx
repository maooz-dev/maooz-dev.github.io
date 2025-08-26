import React from 'react'
import './Contact.css'
import theme from '../../assets/theme.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "09fa35fa-649f-4d1f-967b-dfc945cae61f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='Contact'>
        <div className='Contact-title'>
            <h1>Get In Touch</h1>
            <img src={theme} alt="" />

        </div>
        <div className='Contact-section'>
            {/* left Sectrion */}
            <div className='Left-section'>
                <h1>Let's Talk</h1>
                <p>Hello! Right now I am free and looking for someone who can help me with a project. If anyone is interested in creating or working on a project with me, please let me know. I am open to ideas, collaboration, and learning new things together. This will be a great opportunity for both practice and building something useful.</p>
                <div className='Contact-details'>
                    <div className='Contact-detail'>
                     <img src={mail_icon} alt="" />
                     <p>maoozkhan@gmail.com</p>
                    </div>
                    <div className='Contact-detail'>
                     <img src={location_icon} alt="" />
                     <p>Islamabad DHA Phase(7)</p>
                    </div>
                    <div className='Contact-detail'>
                     <img src={call_icon} alt="" />
                     <p>0336-026-2012</p>
                    </div>
                </div>

            </div>
            {/* Right Said */}
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message</label>
                <textarea name="message" id=""  rows="10" placeholder='Enter Your Message'></textarea>
                <button className='Contact-submit'>Submit Now</button>
            </form>

        </div>
      
    </div>
  )
}

export default Contact
