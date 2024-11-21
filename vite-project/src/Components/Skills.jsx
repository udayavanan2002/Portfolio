import React from 'react'
import './Skills.css'
import { useState } from 'react'
import Icon from '../assets/images/icons (8).png'
import react from '../assets/images/icons8-react-native-96.png'
import html from '../assets/images/icons8-html-5-96.png'
import css from '../assets/images/icons8-css3-96.png'
import python from '../assets/images/icons8-python-96.png'
import c from '../assets/images/icons8-c-programming-96.png'
import js from '../assets/images/icons8-javascript-96.png'
import sql from '../assets/images/icons8-structured-query-language-a-standard-computer-language-in-server-96.png'
import excel from '../assets/images/icons8-microsoft-excel-2019-96.png'
import {
  Home,LiveTv,Search,ContactPage,ArrowForward,Accessibility,
  DonutLarge,LinkedIn,GitHub,Instagram, Email,Person,DashboardCustomize,Power,WorkSharp,
  CenterFocusStrong,Engineering,EnergySavingsLeaf,StarBorder,StarRate,StarBorderRounded,
   Star,StarHalf,Storage,Language,Code,WebStories,DataSaverOn,ComputerRounded,LaptopMac,DataObject,SdStorage,StorageSharp
} from '@mui/icons-material'

const Skills = () => {
  return (
    <div className='skills'>
        <div className="head">
          <h1>SKILLS</h1>
          <hr className='hrOne'/>
        <hr  className='hrTwo'/>
        <hr  className='hrThree'/>
        </div>
              {/* <div className="main-container">
                <div className="inner-container1">
                  <h1> <LaptopMac className='logoname'/> Programming Language</h1>

                  <div className="box-content">
              <div className="inner-box">
                <p>c</p>
              <img src={c} alt="" width={30}/>
              </div>
             
             
         
            </div>
            <div className="box-content">
              <div className="inner-box">
                <p>Python</p>
              <img src={python} alt="" width={30}/>
                </div>
             
            </div>
                </div>

                <div className="inner-container2">
                  <h1> <WebStories className='logoname'/>Web Technologies</h1>
                  <div className="box-main-content">
                  <div className="box-content2">
              <div className="inner-box">
                <p>Html</p>
              <img src={html} alt="" width={30}/>
                </div>
             
            </div>
            <div className="box-content2">

              <div className="inner-box">
                <p>Css</p>
              <img src={css} alt="" width={30}/>
                </div>
            </div>
                  </div>
                  
            <div className="box-main-content">
            <div className="box-content2">
              <div className="inner-box">
                <p>Js</p>
              <img src={js} alt="" width={30} />
              </div>
             
            </div>
            <div className="box-content2">
              <div className="inner-box">
                <p>React</p>
              <img src={react} alt="" width={30}/>
                </div>

            </div>
            </div>

                </div>
                <div className="inner-container3">
                  <h1> <StorageSharp className='logoname'/>Database & ExcelSheet</h1>
                  <div className="box-content">
                    <div className="inner-box">
                      <p>Sql</p>
                    <img src={sql} alt="" width={30}/>
            
                    </div>
            </div>
            <div className="box-content">
              <div className="inner-box">
                <p>Excel</p>
              <img src={excel} alt="" width={30}/>
              </div>
            </div>
                </div>
              </div> */}

<div className="formal">
            <div className="inner-box">
            <p>c</p>
              <img src={c} alt="" width={40}/>
                          </div>
            <div className="inner-box">
            <p>Python</p>
              <img src={python} alt="" width={40}/>
              </div>
              <div className="inner-box">
                <p>Html</p>
                <img src={html} alt="" width={40}/>
              </div>   <div className="inner-box">
              <p>Css</p>
              <img src={css} alt="" width={40}/>
              </div>
             
              <div className="inner-box">
              <p>Js</p>
              <img src={js} alt="" width={40} />
                          </div>
            <div className="inner-box">
            <p>React</p>
              <img src={react} alt="" width={40}/>
              </div>
              <div className="inner-box">
              <p>Sql</p>
                    <img src={sql} alt="" width={40}/>
              </div>   <div className="inner-box">
              <p>Excel</p>
              <img src={excel} alt="" width={40}/>
              </div>
            </div>
    </div>
  )
}

export default Skills