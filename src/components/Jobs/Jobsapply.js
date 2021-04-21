import React, {Component} from "react";
import './jobsapply.css';
class Jobsapply extends React.Component{
  render() {
    return(
      <div id="jobapply" className="fl-row">
        <div className="fl-row-jobapply">
          <h1 className="entry-title-apply"><b>Job Application: BITCOIN JAVA DEVELOPER</b></h1></div>
        <br></br>
        <div className="row justify-content-center">
          <div className="col-auto">
            <form>
              <p>Title: <u>BITCOIN JAVA DEVELOPER</u></p>
              <br></br>
              <p>Fields marked with an asterisk (*) must be filled out before submitting.</p>
              <table className="job-apply-table table1">
                <tbody>
                <tr className="row1 totalrow1 field2 odd">
                  <th scope="row" className="width">Name *</th>
                  <td><input className="input" type="text" name="jobman-field-2" value="" className="input"/></td>
                </tr>
                <br></br>
                <tr className="row2 totalrow2 field3 even">
                  <th scope="row" className="width">Surname *</th>
                  <td><input className="input" type="text" name="jobman-field-3" value=""/></td>
                </tr>
                <br></br>
                <tr className="row3 totalrow3 field4 odd">
                  <th scope="row" className="width">Email Address *</th>
                  <td><input className="input" type="text" name="jobman-field-4" value=""/></td>
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
export default Jobsapply;