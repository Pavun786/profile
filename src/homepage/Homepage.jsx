import React from 'react';
import './Homepage.css';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { dark } from '@mui/material/styles/createPalette';


const Homepage = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false, strings: ['MERN Stack Developer', 'Full Stack Developer'], startDelay: 500, backDelay: 1500, autoStart: true,
      loop: true
    })
  }, [])

  return (
    <div className="homepage" id="home" style={{ background: darkMode ? 'rgb(23, 23, 23)' : '' }}>
      <div className="homepage-content">
        <div className="homepage-content-left">
          <div style={{ color: darkMode ? 'white' : '' }}>Hello..! I Am</div>
          <div className='name' style={{ color: "rgb(107, 20, 220)" }}>Pavunkumar.E</div>
          <div ref={textRef} style={{ color: darkMode ? 'white' : '' }}></div>

          <a href="https://drive.google.com/file/d/1VueLzoMoAApPWTPC4X3MyYdrRBEOqLoU/view" target='_blank'><button style={{ color: darkMode ? 'black' : 'white', background: darkMode ? "white" : "black" }} className="button homepage-hireme-btn">Resume</button></a>
        </div>
        <div className="homepage-content-right">
          <div className='background-circle'>
            <img className='mypic' src="assets/myphoto.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage