// // 

// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// // import { mainListItems, secondaryListItems } from './listItems';
// // import Chart from './Chart';
// // import Deposits from './Deposits';
// // import Orders from './Orders';
// import React from 'react'
// import Checkbox from '@mui/material/Checkbox';


// const App = () => {
//   return (
//     <div> <div>Appss</div>
//     <h1>Hiiiii</h1>
//     )
// }
// export default App

import React from 'react'
import './App.css'
import pic from './assets/images/pic.png'
// import image from './assets/images/image.JPG'
import back from './assets/images/course-1.jpg'
import logo from './assets/images/logo.jpg'
// import {Link} from 'react-router-dom'
// import Button from '@mui/material/Button';
import {
  Home,LiveTv,Search,ContactPage,ArrowForward,Accessibility,
  DonutLarge,LinkedIn,GitHub,Instagram, Email,Person,DashboardCustomize
} from '@mui/icons-material'

const App = () => {
  return (
    <div className='App'>
      <nav>
        <div className='logo'>
          <img src={logo} alt="" width={70}/>
        </div>
      <div className='navlist'>
        <div className='items'>
          <div className="icons">
          <Home />
          </div>
          <p>Home</p>
      </div>
       <div className='items'>
      <div className="icons">
   <Person />
        </div>
        <p>About</p>
      
      </div>
      <div className='items'>
      <div className="icons">
        <DashboardCustomize />
        </div>
        <p>Projects</p>
      </div>
      <div className='items'>
      <div className="icons">
        <ContactPage />
        </div>
        <p>Contact</p>
      </div>
      </div>
      <div className="hire">
        <button>Hire Me</button>
      </div>
      </nav>
      <header>
        <div className="title">
          <p>
            HELLO! <br />
            I'm UDAYAVANAN R </p>
           <span> Web Developer</span>
           <h5>Web Developer with some experience in designing and developing user interfaces, testing, debugging,
             and training staff within eCommercetechnologies. Proven ability in optimizing web functionalities that improve data
              retrieval and workflow efficiencies.</h5>
          <div className='btn'>
          {/* <a >
            Lets Talk
          </a> */}
          </div>
          {/* <div className="social-media">
            <LinkedIn  className='social'/>
            <GitHub className='social'/>
            <Email className='social'/>
         </div> */}
        </div>
        <div className="pic">
          <img src={pic} alt=""  width={400}/>
        </div>
      </header>
    </div>
  )
}
export default App