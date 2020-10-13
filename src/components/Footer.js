import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
      
        <li>
          <a href="https://github.com/guillenjs" className="icon fa-github" target="_blank">
            <span className="label">Github</span>
          </a>
        </li>
   
        <li>
          <a href="https://www.linkedin.com/in/jorge-guillen-53a4421aa" className="icon fa-linkedin" target="_blank">
            <span className="label">Email</span>
          </a>
        </li>
    
        <li>
          <a href="mailto:jorgeguilln@gmail.com" className="icon fa-envelope-o" target="_blank">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      {/* <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul> */}
    </div>
  </div>
)

export default Footer
