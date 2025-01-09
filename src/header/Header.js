import React from 'react';
import './Header.css';
import DarkLight from '../darkLight/DarkLight';


import { themeContext } from '../Context';
import { useContext } from 'react';

const Header = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const menuToggle = () => {

    // const menu = document.querySelector('.menu')
    const menuList = document.querySelector('nav ul')

    menuList.classList.toggle('showmenu')

  }
  return (
    <div className="header" style={{ background: darkMode ? 'rgb(23, 23, 23)' : '' }}>

      <nav>
        <div class="logo">
          <a href="" style={{ color: darkMode ? 'white' : '' }}>Pavunkumar_E</a>

        </div>

        <ul >
          <div> <DarkLight /></div>
          <li><a href="#home" style={{ color: darkMode ? 'white' : '' }}>Home</a></li>
          <li><a href="#timeline" style={{ color: darkMode ? 'white' : '' }}>About</a></li>
          <li><a href="#skills" style={{ color: darkMode ? 'white' : '' }}>Skills</a></li>
          <li><a href="#proj" style={{ color: darkMode ? 'white' : '' }}>Projects</a></li>
          <li><a href="#contact" style={{ color: darkMode ? 'white' : '' }}>Contact</a></li>
        </ul>

        <div class="menu" onClick={menuToggle}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </nav>

    </div>
  )
}

export default Header