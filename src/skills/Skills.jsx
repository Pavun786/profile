import React from 'react';
import './Skills.css';
import { themeContext } from '../Context';
import { useContext } from 'react';

const Skills = () => {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="skills" id="skills" style={{ background: darkMode ? 'rgb(23, 23, 23)':''}}>
      <h2 style={{color:darkMode ? 'white':''}}>My <span>Technical</span> Skills</h2>
      <div className="skill-icons">
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/html1.png" alt="html" />
          <p style={{color:darkMode ? 'white':''}}>HTML</p>
        </div>
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/css1.png" alt="css" />
          <p style={{color:darkMode ? 'white':''}}>CSS</p>
        </div>
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/js.png" alt="js" />
          <p style={{color:darkMode ? 'white':''}}>JavaScript</p>
        </div>
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/bootstrap.png" alt="bootstrap" />
          <p style={{color:darkMode ? 'white':''}}>Bootstrap</p>
        </div>
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/atom.png" alt="React" />
          <p style={{color:darkMode ? 'white':''}}>React</p>
        </div>
        
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/redux.png" alt="redux" />
          <p style={{color:darkMode ? 'white':''}}>Redux</p>
        </div>

        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/node.jpg" alt="Nodejs" />
          <p style={{color:darkMode ? 'white':''}}>Nodejs</p>
        </div>
       
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/mongo1.jpg" alt="Mongodb" />
          <p style={{color:darkMode ? 'white':''}}>MongoDB</p>
        </div>
       
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img style={{ borderRadius: darkMode ? '50%':''}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAaVBMVEX///8XFRUAAAATERH09PTp6ekQDQ0GAAC4uLj39/e8vLzw8PD8/PzAwMALBwe0tLSUlJSfn5+Ih4fg4OB2dnYjIiLQ0NArKirY2Nh/fn7LysppaGhMS0thYWE4NzcdHByop6dVVFRBQUEOIdwWAAAE0ElEQVRoge1a2ZaqOhBtKgyiiCAgo4r8/0ceQAKZIAnQ59x1F/utWyqbJDXsFPn5OXDgwIEDBw7owrOiLMsiy/trjOY1KBuY8CqDs/nLnN41t1sqxzYm2E7Hnl9/b+ZF3BIgQwTU/lIWv0Fq1ukc6Uid1nsvuBmmYC+QDksOaXDZkdW7qbAOzPVuG519FFm/zNVjH9oAHGXWDj7cd2C9VKDF2gEaayttoTlZPOXrNtp6MXTmgSDcQnvXX2OMLZu8gbYlzv8J7XriYBvt2qW+baVtiWt92mw7bUusnbpcYwqgrsgp52eqVCLQLRPPabrILrJz8Fqugt/ptfXolD3S6UH46NHWxCoPfhndJcyt6Ij6J8k40MsfkU0wwHn476VlHlbAGeWV4yPMipNyQfAiiDR4S9KpiD2KSvBbrqR6xvcgDMPgHj+rpP2PD89sfMqjrJ/qtFfSEAH506kp68hyif+4VnSLmxv5UEo6oUaJqHzCzq7UX3jAk7T3G1UBcqZC19dYqAExNQDc5BY9Gn9XXvulZlXQmcrXDMEWJa0VFHf4Q1shpM3b0MnNV/IQi03M4MqNKHjcCCoxHHJWqn6BUXAjBApWKVsB4KTJe2V57bfc6MK9rL5s4BQDyHVtzdiovCsHOhKVBAATAzppbgIrGpxSasLUOr9ZQUuV7+/bywzYKFop/B/sMLJIOtEGKFl5qmSiQhqLjCuCfGPEYLS3NIJj5nndnIHBxDDEkuc/dAToC9EBGVtclvfLe1H7guxs8fF5WAkVF/Zrmdelwwglaw/QJjMBSXExWXfeideA5Q7Tf4XX0FG/JKwUbeF11vpVZGzhNWBtz5GtDLq8O+UNGa+bMMuztjsSsg66HEdeReerlWWQK4R+JakvTNlHycrOLuPO0sLP9nD2qr+y/WLl1cpCmLPD1BID1v/1OxQdPLYzANI8wEnQNR7Na3+pCePQ1HFfFS47XYUTEq+59c+hJTeG/KDCeqJuS+aH90012cL36TST5VkwgoJZLDCrNWgFrXKpquvAnSI7w1L1DOxye2uoVrVkUApkWxIUp1w7Alo7UbIdgs9+naPingJ+iSSUaY8oTISdREXHvKDe+NtPMQM8lA1GFT7m9Jb1CCskbtoipJgBhtoAcV+LruMckA+QVmXOligzL7tmoT/TNVXOeNZ7aHW++rCjGu9I9DUsmOXsLN7KmhTnrOHzExVZwi4Ye76npqvSVPliFL92f25138S+CbssXCeFfE8N5TCegp1e5xSTm84IkHR2nfW6QWP0f+P2CvSLcGD7ChOtnm64vHH0GP3f0Qe318W5miu4eHnemlV03DEssKIgLuOgmMmXpxlefXk2+rSSkhXUoJ5W3ZdH4C1Tysxi3hWSoY2eFyY+yx8W8sJLt5Pb45I4eLWkzSQRr5OsvFNhvTFxGkqCX8DrqOdHFhdcBe22IMRBGOSfmTTA80K64QaJOV1m6L84gj+z2RwvVJuuzLis2lLkhXiVSxEIwVfgpfOGv+02wxePFEQfKed5EaS73JRxc+LuyIxfEbwO5FvXGOPRjMpJxmtDs9O1oO+4+CLUMq8Nqe7HFxluSV+Dl3gBkrXtnyU8yi6CxUnI6n4q91xhEu6tntXP9W0vbzpw4MCBAwf+9/gDAPw29HjkRogAAAAASUVORK5CYII=" alt="html" />
          <p style={{color:darkMode ? 'white':''}}>Github</p>
        </div>
        <div className="each-icon" style={{ background: darkMode ? 'black':'',border:darkMode ? '1px solid grey':''}}>
          <img src="assets/skill-icons/postman.svg" alt="Postman" />
          <p style={{color:darkMode ? 'white':''}}>Postman</p>
        </div>
      
        
      </div>
          
         
    </div>
  )
}

export default Skills