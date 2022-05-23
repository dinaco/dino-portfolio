import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const { name, bio, email, image, resumeDownload } = this.props.data;
    const profilepic = `images/${image}`;

    return (
      <section id='about'>
        <Fade duration={1000}>
          <div className='row'>
            <div className='three columns'>
              <img
                className='profile-pic'
                src={profilepic}
                alt="Dino's Profile Pic"
              />
            </div>
            <div className='nine columns main-col'>
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className='row'>
                <div className='columns contact-details'>
                  <h2>Contact Details</h2>
                  <p className='address'>
                    <span>{name}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className='columns download'>
                  <p>
                    <a
                      href={resumeDownload}
                      target='_blank'
                      rel='noreferrer'
                      download='proposed_file_name'
                      className='button'>
                      <i className='fa fa-download'></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
