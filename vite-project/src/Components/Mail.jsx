import React from 'react'
import './Mail.css'
import mail from '../assets/images/icons8-sent-64.png'
import mail2 from '../assets/images/icons8-gmail-50.png'
import {
  Home,LiveTv,Search,ContactPage,ArrowForward,Accessibility,
  DonutLarge,LinkedIn,GitHub,Instagram, Email,CenterFocusStrong,FilterCenterFocus,DeveloperBoard,FmdGood,Laptop,Interests,InterestsRounded
 
} from '@mui/icons-material'
const Mail = () => {
  return (
    <div className='mail'>
      
      <div className="mail-content">
        
        <div className="mail-content-left">
        <h1>Send Me The Mail <Email style={{fontSize:'25px'}}/></h1>
          <form action="">
          <div className="input">
            <input type="text" placeholder='Your Name'/>
          </div>
          <div className="input">
            <input type="email" placeholder='Your Email'/>

          </div>
          <div className="input">
            <input type="number" placeholder='Your Phone no'/>
          </div>
          <div className="input-submit">
            <input type="submit" value='Send Mail'/>
          </div>
          </form>

        </div>
        <div className="mail-content-right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa odit
             soluta enim labore id rerum tempora dolorum quae veniam
             consecr adipisicing elit. Assumenda ipsa odit
             soluta enim labore id rerum tempora dolorum quae veniam
             rum tempora dolorum quae veniam
             consectetur adipisicing elit. Assumenda ipsa odit
             soluta enim labore id rerum tempora dolorum quae veniam??</p>
             <h3>Interests <Interests style={{fontSize:'20px'}}/></h3>
             <div className="year">
              {/* <p>Experience <br /> 1 Years</p>
              <p>Projects Done <br />30+</p> */}
              <p>Front-End Developer</p>
              <p>Web Developer</p>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Mail