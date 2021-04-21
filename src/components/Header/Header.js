import React from 'react';
import './header.css';
const Header = (props) => {
  return (
    <div id="masthead" className="header-page" role="banner">
      <div className="site-branding">
        <div className="wrap">
          <a href="https://kromatik.solutions/" className="custom-logo-link" rel="home">
            <img width="91"
                 height="95"
                 src="http://www.kromatiksolutions.com/wp-content/uploads/2019/08/kromatik_logo_copy.png"
                 className="custom-logo"
                 alt="Kromatik Solutions"
                 sizes="100vw"/></a>

          <div className="site-branding-text">
            <h1 className="site-title">
              <a href="https://kromatik.solutions/" rel="home">
                Kromatik Solutions</a>
            </h1>
            <p className="site-description">software, engineering, contract, outsource</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;