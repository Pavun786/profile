import React from 'react';
import './Portfolio.css';
import {
  AiOutlineGithub, AiFillGithub, AiFillMail, AiOutlineMail, AiFillLinkedin, AiOutlineLinkedin
} from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri"
import { CgWebsite } from "react-icons/cg";
import { themeContext } from '../Context';
import { useContext } from 'react';




const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="proj" style={{ background: darkMode ? 'rgb(23, 23, 23)' : '' }}>
      <h2 style={{ color: darkMode ? 'white' : '' }}>My <span>Projects</span></h2>
      <div className="project-cards">

        <div className="card" style={{ border: darkMode ? '1px solid grey' : '' }}>
          <img src="assets/projects/Project1.jpg" alt="Project1 img" />
          <h3 style={{ color: darkMode ? 'white' : '' }}>Equipment Hiring Portal</h3>
          <p>React,Nodejs,Expressjs,MongoDB</p>
          <p style={{ color: 'grey', textAlign: 'center', fontSize: '14px' }} className='proj-description'> Equpiment hiring is online websie.its used to rent the product for temporary usage.</p>
          <div className="sourcecode-icons">
            <a href="https://github.com/Pavun786/Equipment-Rental-Portal-Frontend.git" target="_blank">< AiOutlineGithub style={{ fontSize: '30px' }} className='ai-icon' /></a>

            <a href="https://visionary-baklava-331970.netlify.app" target="_blank"><RiLiveLine style={{ fontSize: '30px' }} className='ai-icon' /></a>
          </div>



        </div>

        <div className="card" style={{ border: darkMode ? '1px solid grey' : '' }}>
          <img src="assets/projects/Project2.png" alt="Project2 img" />
          <h3 style={{ color: darkMode ? 'white' : '' }}>React Markdown Viewer</h3>
          <p>React,Nodejs,Expressjs,MongoDB</p>
          <p style={{ color: 'grey', textAlign: 'center', fontSize: '14px' }} className='proj-description'>React-markdown is a react component that converts Markdown text into the corresponding HTML code.</p>
          <div className="sourcecode-icons">
            <a href="https://github.com/Pavun786/React-Markdown-Viewer-Frontend.git" target="_blank">< AiOutlineGithub style={{ fontSize: '30px' }} className='ai-icon' /></a>

            <a href="https://react-markdown-viewer-frontend.vercel.app/" target="_blank"><RiLiveLine style={{ fontSize: '30px' }} className='ai-icon' /></a>

          </div>

        </div>

        <div className="card" style={{ border: darkMode ? '1px solid grey' : '' }}>
          <img src="assets/projects/Project3.png" alt="Project3 img" />
          <h3 style={{ color: darkMode ? 'white' : '' }}>Ecommerce Application</h3>
          <p>React,Nodejs,Expressjs,MongoDB</p>
          <p style={{ color: 'grey', textAlign: 'center', fontSize: '14px' }} className='proj-description'>The BuyCart application used to list items for purchase, facilitate a transaction by accepting payment methods, and initiate fulfillment of those purchases.</p>
          <div className="sourcecode-icons">
            <a href="https://github.com/Pavun786/Ecommerce_FrontEnd.git" target="_blank">< AiOutlineGithub style={{ fontSize: '30px' }} className='ai-icon' /></a>

            <a href="https://ecommerce-front-end-opal.vercel.app/" target="_blank"><RiLiveLine style={{ fontSize: '30px' }} className='ai-icon' /></a>

          </div>

        </div>

        <div className="card" style={{ border: darkMode ? '1px solid grey' : '' }}>
          <img src="assets/projects/Project4.png" alt="Project4 img" />
          <h3 style={{ color: darkMode ? 'white' : '' }}>Social Media Application</h3>
          <p>React,Nodejs,Expressjs,MongoDB</p>
          <p style={{ color: 'grey', textAlign: 'center', fontSize: '14px' }} className='proj-description'>A social media application with users, posts, likes and comments - developed using React, Node, Express and MongoDB.</p>
          <div className="sourcecode-icons">
            <a href="https://github.com/Pavun786/Social_Media-FrontEnd.git" target="_blank">< AiOutlineGithub style={{ fontSize: '30px' }} className='ai-icon' /></a>

            <a href="https://social-media-front-end-beta.vercel.app/" target="_blank"><RiLiveLine style={{ fontSize: '30px' }} className='ai-icon' /></a>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Portfolio