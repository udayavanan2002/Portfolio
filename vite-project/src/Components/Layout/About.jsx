import React from 'react'
import './About.css'
import pic from '../../assets/images/pic.png'
// import {Link} from 'react-router-dom'
import icon8 from '../../assets/images/icons (8).png'
import {
  Home,LiveTv,Search,ContactPage,ArrowForward,Accessibility,
  DonutLarge,LinkedIn,GitHub,Instagram, Email,Person,DashboardCustomize,Power,WorkSharp,CenterFocusStrong,Engineering,EnergySavingsLeaf
} from '@mui/icons-material'


const About = () => {
  return (
    <div className='About'>
        
        {/* <hr className='hrOne'/>
        <hr  className='hrTwo'/>
        <hr  className='hrThree'/> */}
        <div className="about-content">
        <img src={icon8} alt="" width={320} height={280}/>
        <div className="para-content">
        <h1>About My Work</h1>
        <div className="about-me">
          <p>Sincerity <CenterFocusStrong /></p>
          <p>Dedication <EnergySavingsLeaf /></p>
          <p>Hardworking <Engineering /></p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita odio dolore repellat iure veniam
             facilis quas reiciendis, delectus, suscipit sequi explicabo, nam culpa? Eius, similique beatae non vel illum harum, delectus,
             suscipit sequi explicabo, nam culpa? Eius, similique beatae non vel illum harum? nam culpa? Eius, similique beatae non vel illum harum?
             nam culpa? Eius, similique beatae non vel illum harum? nam culpa? Eius, similique beatae non vel illum harum?</p>
             <button>Contact Me</button>
        </div>
        </div>
    </div>
  )
}

export default About