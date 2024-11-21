import React from 'react'
import screenshots from './assets/images/Screenshot (17).png'
import sc1 from './assets/images/Screenshot (22).png'
import sc2 from './assets/images/Screenshot (35).png'
import sc3 from './assets/images/Screenshot (74).png'
import sc4 from './assets/images/Screenshot (84).png'
import './Project.css'
import {
    Home,LiveTv,Search,ContactPage,ArrowForward,Accessibility,
    DonutLarge,LinkedIn,GitHub,Instagram, Email,Person,DashboardCustomize,Power,WorkSharp,CenterFocusStrong,Engineering,EnergySavingsLeaf
  } from '@mui/icons-material'
  

const Project = () => {
  return (
    <div className='Projects'>
      <main>
        <div className="head">
        <h1>PROJECTS</h1>
        <hr className='hrOne'/>
        <hr  className='hrTwo'/>
        <hr  className='hrThree'/>
        </div>
        <div className="container">
          <div className="pic-list">
            <div className="hover">
                
                <img src={screenshots} alt="" width={330} height={230}/>
                {/* <div className="text">
                <p>Projects </p>
                <h1>Lorem ipsum dolor sit.</h1>       
                </div> */}
                </div>
                {/* <span>
                    <div className="content">
                        <p>Online<br/>Book Store</p>
                        <a href="">Read More <ArrowForward className='arrow'/></a> 
                    </div>
                </span> */}
            <div className="hover">
            <img src={sc1} alt=""width={330} height={230}/>
                {/* <span>
                    <div className="content">
                    <p>Health<br/>Monitoring</p>
                        <a href="">Read More <ArrowForward className='arrow'/></a>
                    </div>
                </span> */}
            </div>
            <div className="hover">
                <img src={sc2} alt="" width={330} height={230}/>
                {/* <span>
                    <div className="content">
                    <p>Business<br/>Portfolio</p>
                        <a href="">Read More <ArrowForward className='arrow'/></a>
                    </div>
                </span> */}
            </div>
            <div className="hover">
                <img src={sc3} alt="" width={330} height={230}/>
                {/* <span>
                    <div className="content">
                    <p>Scholarship<br/>Management</p>
                        <a href="">Read More <ArrowForward className='arrow'/></a>
                    </div>
                </span> */}
            </div>
            <div className="hover">
            <img src={sc1} alt=""width={330} height={230}/>
                {/* <span>
                    <div className="content">
                    <p>Health<br/>Monitoring</p>
                        <a href="">Read More <ArrowForward className='arrow'/></a>
                    </div>
                </span> */}
            </div>
            <div className="hover">
                <img src={sc4} alt="" width={330} height={230}/>
                {/* <span>
                    <div className="content">
                    <p>e-Learning<br/>Blog</p>
                        <a href="">Read More <ArrowForward className='arrow'/></a>
                    </div>
                </span> */}
            </div>
          </div>
        </div>
      </main>
     
    </div>
  )
}
export default Project