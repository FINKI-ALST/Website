import React, {Component} from "react";
import './jobs.css';
class Jobs extends Component {
  render() {
    return (
      <div id="jobs" className="fl-row">
        <div className="fl-row-job">
          <h1 className="entry-title"><b>Jobs</b></h1></div>
        <br></br>
        <br></br>
        <br></br>

        <div className="row justify-content-center">
          <div className="col-auto">
            <table className="table table-responsive">
              <tbody>
              <tr>
                <th scope="row">Title</th>
                <td className="title"><u>BITCOIN JAVA DEVELOPER</u></td>
              </tr>
              <tr>
                <th scope="row">Location</th>
                <td>Skopje, Macedonia</td>
              </tr>
              <tr>
                <th className="info" scope="row">Info</th>
                <td>We are looking for a Bitcoin Java developer in Macedonia with following skills in the field:
                  <p></p>
                  <ul className="skills">
                    <li>1-3 years of working experience with web development in <b>JAVA</b> and <b>J2EE</b></li>
                    <li>Knowledge&nbsp;or&nbsp;willingness to learn the <a className="bitcoin" href="https://bitcoin.org/en/"><b><u>Bitcoin</u></b></a> protocol.</li>
                    <li>Experience with <b>Spring and Spring Boot Framework.</b></li>
                    <li>Experience with <b>PostgreSQL.</b></li>
                    <li>Knowledge of <a className="angular" href="https://angularjs.org/"><b><u>AngularJS</u></b></a> is a plus.</li>
                    <li>Bachelor's Degree in Information Systems, Computer Science or equivalent business experience in a related field</li>
                  </ul>
                  <p><b><i>What Kromatik Solutions offers:</i></b></p>
                  <ul className="offer">
                    <li>Flexible working time</li>
                    <li>Vacation Days and Public Holidays</li>
                    <li>Excellent compensation with competitive salary</li>
                    <li>Company trainings and workshops</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td></td>
                <tr>
                  <td className="jobs-applynow"><p className="apply"><b><i>Apply Now</i></b></p></td>
                </tr>
              </tr>
              </tbody>
            </table>
            <form>
            <table className="job-apply-table">
              <tbody>
              <tr><p className="fields">Fields marked with an asterisk (*) must be filled out before submitting.</p></tr>
              <tr className="row1 totalrow1 field2 odd">
                <th scope="row" className="width">Name *</th>
                <td><input className="input" type="text" name="jobman-field-2" className="input"/></td>
              </tr>
              <br></br>
              <tr className="row2 totalrow2 field3 even">
                <th scope="row" className="width">Surname *</th>
                <td><input className="input" type="text" name="jobman-field-3"/></td>
              </tr>
              <br></br>
              <tr className="row3 totalrow3 field4 odd">
                <th scope="row" className="width">Email Address *</th>
                <td><input className="input" type="text" name="jobman-field-4"/></td>
              </tr>
              <br></br>
              <tr className="row4 totalrow4 field7 even">
                <th scope="row" className="width">Skype *</th>
                <td><input className="input" type="text" name="jobman-field-7"/></td>
              </tr>
              <br></br>
              <tr className="row5 totalrow5 field16 odd">
                <th scope="row" className="width">Upload your CV</th>
                <td><input type="file" name="jobman-field-16"/></td>
              </tr>
              <br></br>
              <tr>
                <td colSpan="2">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan="2" className="submit"><input type="submit" name="submit" className="btn btn-secondary btn-md  active" value="Submit Your Application"/></td>
              </tr>
              </tbody>
            </table>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;

