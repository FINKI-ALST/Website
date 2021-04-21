import React, {Component} from "react";
import './contact.css'
class Contact extends Component {
  render() {
    return (
      <div id="contact" className="fl-row">
          <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-md">
              <h3 className="heading" style={{marginLeft:"-500px", fontSize: "40px"}}>
                Contact Us
              </h3>
              <br></br>
              <div className="row">
                <div className="col-md">
                  <form className="contact-form">
                    <strong>
                    <label htmlFor="name" style={{marginLeft:"-15px"}}>Name</label></strong>
                    <div className="row">
                      <input type="text" id="fl-name" name="name" placeholder="Your name" style={{width: "-webkit-fill-available", height: "50px", border: "1px solid #bbb"}}/>
                    </div>
                    <br></br>
                    <strong>
                    <label htmlFor="email" style={{marginLeft:"-15px"}}>Email</label></strong>
                    <div className="row">
                      <input type="email" id="fl-email" name="email" placeholder="Your email" style={{width: "-webkit-fill-available", height: "50px", border: "1px solid #bbb"}}/>
                    </div>
                    <br></br>
                    <strong>
                    <label htmlFor="message" style={{marginLeft:"-15px"}}>Your Message</label></strong>
                    <div className="row">
                      <textarea id="message" name="message" placeholder="Your message" style={{width: "100%", height: "100%", border: "1px solid #bbb"}}/>
                    </div>
                    <br></br>
                    <div className="row">
                        <a href="#" className="btn btn-secondary btn-md  active" role="button"
                         aria-disabled="true">Send</a>
                    </div>
                  </form>
                </div>
                <div className="col-md" style={{marginLeft: "20px"}}>
                  <strong>Telephone</strong>
                  <br></br>
                  +389 2 3118 689
                  <br></br>
                  <br></br>
                  <strong>Email</strong>
                  <br></br>
                  contact@kromatiksolutions.com
                  <br></br>
                  <br></br>
                  <strong>Address:</strong>
                  <br></br>
                  Shumadiska 6 1/1,
                  <br></br>
                  1000 Skopje,
                  <br></br>
                  Republic of Macedonia
                  <br></br>
                  <br></br>
                  <link rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                  <a href="https://www.linkedin.com/company/kromatik-solutions" target="_blank"
                     aria-label="link to https://www.linkedin.com/company/kromatik-solutions"
                     rel="noopener">
                    <i className="fa fa-linkedin-square fa-2x"></i>
                  </a>
                  <a href="https://www.facebook.com/mcoderaSoft" target="_blank"
                     aria-label="link to https://www.facebook.com/mcoderaSoft" rel="noopener">
                    <i className="fa fa-facebook-square fa-2x"></i>
                  </a>
                </div>
                  <div className="col-6">
                      <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD09zQ9PNDNNy9TadMuzRV_UsPUoWKntt8&amp;q=Shumadiska+6%2C+Skopje%2C+North+Macedonia"></iframe>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
