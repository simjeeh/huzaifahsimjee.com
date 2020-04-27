import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var split_bio = this.props.data.bio.split('\n').map((line) => <p style={{"margin-bottom": "-5px"}}>{line}</p>)
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  style={{"width" : "100%", "height": "auto"}} src={profilepic} alt="Huzaifah Simjee Profile" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <h6 style={{"margin-bottom": "50px"}}>{split_bio}</h6>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
