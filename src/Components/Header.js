import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const { social, name, description } = this.props.data;

    return (
      <header id='home'>
        <ParticlesBg type='lines' bg={true} />

        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>

            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>

            <li>
              <a className='smoothscroll' href='#skills'>
                Skills
              </a>
            </li>

            <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <Fade direction='up' triggerOnce>
              <h1 className='responsive-headline'>{name}</h1>
            </Fade>
            <Fade direction='up' duration={1200} triggerOnce>
              <h3>{description}</h3>
            </Fade>
            <Fade direction='up' duration={2000} triggerOnce>
              <ul className='social'>
                <a
                  href={social[0].url}
                  target='_blank'
                  rel='noreferrer'
                  className='button btn'>
                  <i className={social[0].className}></i>
                  {social[0].name}
                </a>
                <a
                  href={social[1].url}
                  target='_blank'
                  rel='noreferrer'
                  className='button btn'>
                  <i className={social[1].className}></i>
                  {social[1].name}
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
