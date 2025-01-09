import React, { useRef, useState } from 'react';
import './ContactCopy.css';
import {
  AiOutlineGithub, AiFillGithub, AiFillMail, AiOutlineMail, AiFillLinkedin, AiOutlineLinkedin
} from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { themeContext } from '../Context';
import { useContext } from 'react';



const Contact = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setdone] = useState(false)

  console.log('done', done)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2dqwi1b', 'template_c2amjjj', form.current, 'Zw2fLJKelDpTMfPg1')
      .then((result) => {
        console.log(result.text);
        setdone(true)

      }, (error) => {
        console.log(error.text);
      });
  };
  // #1a202c
  return (
    <div className="contact-comp" style={{ background: darkMode ? 'rgb(23, 23, 23)' : '' }}>
      <h2 style={{ color: darkMode ? 'white' : '' }}>Contact <span>Details</span></h2>
      <div className="contact" id="contact">

        <div className='contact-content'>
          <div className='mini-icons'>
            <div style={{ backgroundColor: 'black' }} title="Github"><a href="https://github.com/Pavun786" target="_blank"><AiOutlineGithub className='side-btn' /></a></div>
            <div style={{ backgroundColor: 'blue' }} title="LinkedIn"><a href="https://www.linkedin.com/in/pavunkumar-e-217886270/" target="_blank"><AiFillLinkedin className='side-btn' /></a></div>
            <div style={{ backgroundColor: 'crimson' }} title="G-mail"><a href="mailto:pavun4587@gmail.com" target="_blank"><AiOutlineMail className='side-btn' /></a></div>


          </div>
          <div className="contact-buttons">
            <a href='https://github.com/Pavun786'><button className='github-btn'><span>< AiOutlineGithub className='bbb' /></span>Github</button></a>
            <a href='https://www.linkedin.com/in/pavunkumar-e-217886270/'><button className='linkedin-btn'><span><AiFillLinkedin className='bbb' /></span>Linked In</button></a>
            <a href='mailto:pavun4587@gmail.com'><button className='gmail-btn'><span><AiOutlineMail className='bbb' /></span>Gmail</button></a>
          </div>

          <div className='contact-left'>
            <form ref={form} onSubmit={sendEmail} className='form' action="">
              <input className='input' type="text" name="username" placeholder='Name' />
              <input className='input' type="email" name="useremail" placeholder='Email Address' />
              <textarea className='input' name="message" id="" cols="20" rows="7" placeholder="Message . . ."></textarea>
              <input type="submit" className=' button submitbutton' style={{ color: 'white', background: darkMode ? "rgb(107, 20, 220)" : "black" }} value='Send Message' />
              {done && <div className='thank-msg' style={{ color: darkMode ? 'white' : '' }}>Thanks for contacting me!  <button onClick={() => setdone(false)} className='thank-btn' >x</button></div>}
            </form>
          </div>
          <div className='contact-right'>
            <img src="assets/services.png" alt="" style={{ borderRadius: darkMode ? '7px' : '' }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact



