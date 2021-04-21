import './app.css'
import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import clients from "./components/Clients/Clients";
import about from "./components/About/About";
import contact from "./components/Contact/Contact";
import jobs from "./components/Jobs/Jobs";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Link} from 'react-router-dom';
import {addResponseMessage, Widget, addLinkSnippet, addUserMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
class App extends Component {
  componentDidMount() {
    addResponseMessage("Send a message, and we’ll reply as soon as we can.");
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
  }
  render() {
    return (
      <HashRouter>
        <Header/>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav justify-content-center">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="menu-main-menu-container">
              <ul className="navbar-nav nav justify-content-center" style={{position: "sticky", top: "0px"}}>
                  <li className="nav-item">
                    <Link className="nav-link active" style={{paddingRight: "60px", fontFamily: "-webkit-pictograph"}} to={"/about"}>What we do</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" style={{paddingRight: "60px", fontFamily: "-webkit-pictograph"}} to={"/clients"}>Our clients</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" style={{paddingRight: "60px", fontFamily: "-webkit-pictograph"}} to={"/jobs"}>Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" style={{paddingRight: "60px", fontFamily: "-webkit-pictograph"}} to={"/contact"}>Contact</Link>
                  </li>
              </ul>
                <div className="content">
                  <Route path="/about" component={about}/>
                  <Route path="/clients" component={clients}/>
                  <Route path="/jobs" component={jobs}/>
                  <Route path="/contact" component={contact}/>
                </div>
              </div>
            </nav>
        <Widget handleNewUserMessage={this.handleNewUserMessage}
                title="Welcome!"
                subtitle="How can we help you?"/>
        <Footer/>
      </HashRouter>
    );
  }
}
export default App;

