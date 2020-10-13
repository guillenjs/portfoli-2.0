import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import profile from '../assets/images/stackicons/profile.jpg'

import javascript from '../assets/images/stackicons/javascript.png'
import react from '../assets/images/stackicons/iconfinder_react_1296845.png'
import ruby from '../assets/images/stackicons/iconfinder_ruby_308447.png'
import rails from '../assets/images/stackicons/iconfinder_ruby-on-rails_3069735.png'
import postgresql from '../assets/images/stackicons/iconfinder_postgresql_4691328.png'
import css3 from '../assets/images/stackicons/iconfinder_css-3_4961937.png'
import html5 from '../assets/images/stackicons/iconfinder_50-html5_104453.png'
import github from '../assets/images/stackicons/iconfinder_Github_1298743.png'
console.log(profile)


const Header = () => (

  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={profile} alt="profile image" className="profileImg" />
      </a>
      <h1>
        <strong>Full Stack Developer</strong>
      </h1>
      <br></br>
      <u><h4>Stack</h4></u>
          <img src={javascript} className="stackIcons2"></img>
          <img src={react} className="stackIcons2"></img>
          <img src={ruby} className="stackIconsRails"></img>
          <img src={rails} className="stackIcons"></img>
            <br></br>
          <img src={postgresql} className="stackIcons"></img>
          <img src={css3} className="stackIcons"></img>
          <img src={html5} className="stackIcons2"></img>
          <img src={github}className="stackIcons"></img>
       <div> 
        <strong>+</strong> 
        ActiveRecord, Sinatra,
        <br></br>
        REST API, MVC
      </div>
    </div>
    <Footer />
  </header>
)

export default Header
