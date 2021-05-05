import './app.css'
import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import about from "./components/About/About";
import contact from "./components/Contact/Contact";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Link} from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import 'react-chat-widget/lib/styles.css';
import Navbar from 'react-bootstrap/Navbar';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header/>
        <nav className="navbar navbar-expand-md navbar-light bg-light nav justify-content-center sticky-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
          </button>
          <div className="menu-main-menu-container">
            <ul className="navbar-nav nav justify-content-center" style={{position: "sticky", top: "0px"}}>
              <li className="nav-item">
                <Link className="nav-link active" style={{paddingRight: "60px", fontFamily: "-webkit-pictograph"}} to={"/about"}>What we do</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{paddingRight: "60px", fontFamily: "-webkit-pictograph"}} to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <Route path="/about" component={about}/>
          <Route path="/contact" component={contact}/>
        </div>
        <ScriptTag isHydrating={false} type="text/javascript" src="https://embed.small.chat/T035HABL1GCD0XQKMY.js" />
        <Footer/>
      </HashRouter>
    );
  }
}
export default App;

