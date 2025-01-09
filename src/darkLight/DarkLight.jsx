import React from 'react';
import './DarkLight.css';
import { themeContext } from '../Context';
import { useContext } from 'react';

import { BsMoon,BsSun } from "react-icons/bs";


const DarkLight = () => {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  const handleClick=()=>{
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="darklight-btn" onClick={handleClick} style={{display:'flex',marginLeft:'10px',alignItems:'center',cursor:'pointer'}}>
        <div><BsMoon style={{fontSize:'18px',fill:darkMode?'white':'#242d49'}}/></div>
        <div><BsSun style={{fontSize:'19px',fill:darkMode?'white':'#242d49'}}/></div>
        <div className="toggle-btn"  style={darkMode?{left:'3px'}:{left:'27px'}}>  
        &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default DarkLight