import React, {Component} from "react";
import './footer.css'
class Footer extends Component {
  render() {
    return (
      <div className="wrap">
          <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav justify-content-center" role="navigation" aria-label="Footer Social Links Menu">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a href="https://www.facebook.com/mcoderaSoft" target="_blank"
                           aria-label="link to https://www.facebook.com/mcoderaSoft" rel="noopener">
                            <i className="fa fa-facebook fa-2x"></i>
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://www.linkedin.com/company/kromatik-solutions" target="_blank"
                           aria-label="link to https://www.linkedin.com/company/kromatik-solutions"
                           rel="noopener">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
export default Footer;
