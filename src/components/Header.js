import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src="profile.jpg" alt="profile image" className="profileImg" />
      </a>
      <h1>
        <strong>Full Stack Developer</strong>
      </h1>
      <br></br>
      <u><h4>Stack</h4></u>
          <img src="javascript.png" className="stackIcons2"></img>
          <img src="iconfinder_react_1296845.png" className="stackIcons2"></img>
          <img src="iconfinder_ruby_308447.png" className="stackIconsRails"></img>
          <img src="iconfinder_ruby-on-rails_3069735.png" className="stackIcons"></img>
            <br></br>
          <img src="iconfinder_postgresql_4691328.png" className="stackIcons"></img>
          <img src="iconfinder_css-3_4961937.png" className="stackIcons"></img>
          <img src="iconfinder_50-html5_104453.png" className="stackIcons2"></img>
          <img src="iconfinder_Github_1298743.png" className="stackIcons"></img>
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
