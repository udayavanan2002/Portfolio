import React from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App.jsx'
import Project from './Project.jsx'
import Skills from './Components/Skills.jsx'
import About from './Components/Layout/About.jsx'
import Fetchdata from './Components/Mail.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About />
    <Skills />
    <Project />
    <Fetchdata />
  </React.StrictMode>,
)
