import React, {Component} from "react";
import './about.css';
class About extends Component {
  render() {
    return (
      <div id="about" className="row">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
              integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
              crossOrigin="anonymous"/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3 col-lg-3 text-center" style={{margin:"20px"}}>
              <i className="far fa-building fa-4x"></i>
              <div className="col-md">
                <h5 className="heading">CONSULTING</h5>
                <div className="col-md1">
                  We are an enterprise software development
                  company providing development services,
                  backed up with comprehensive quality assurance.
                  <br></br>
                  We offer small agile teams with both developers
                  and Quality assurance engineers at the same place.
                  <br></br>
                  We are always looking for long-term cooperation with our
                  clients.
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center" style={{margin:"20px"}}>
              <i className="fas fa-hammer fa-4x"></i>
              <div className="col-md">
                <h5 className="heading">EXPERTS</h5>
                <div className="col-md1">
                  We’re specializing in billing systems, telecom billing, e-commerce, Big
                  Data analytics &amp; reporting, real-time streaming and monitoring using
                  various back-end and front-end technologies from the JavaEE stack.
                  <br></br>
                  We are led by experts having over 10 years of experience working
                  with several clients mostly from Europe, USA and Canada.
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 text-center" style={{margin:"20px"}}>
              <i className="fas fa-project-diagram fa-4x"></i>
              <div className="col-md">
                <h5 className="heading">PROJECTS</h5>
                <div className="col-md1">
                  Development of billing platforms for both e-commerce and telecom
                  industry
                  <br></br>
                  <br></br>
                  Building a microservice architecture for one of the leading
                  freelancer site
                  <br></br>
                  <br></br>
                  Creating a real-time streaming engine and dashboard solution for
                  Big Data Analytics.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About;