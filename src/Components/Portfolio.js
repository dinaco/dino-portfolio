import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((projects, i) => {
      const projectImage = `images/portfolio/${projects.image}`;

      return (
        <div key={i} className='columns portfolio-item'>
          <div className='item-wrap'>
            <img alt={projects.title} src={projectImage} />
            <div className='overlay'>
              <div className='portfolio-item-meta'>
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
                <ul className='social'>
                  <a
                    href={projects.url}
                    target='_blank'
                    rel='noreferrer'
                    className='button btn'>
                    <i className='fa fa-globe'></i>Visit
                  </a>
                  {projects.codeUrl && (
                    <a
                      href={projects.codeUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='button btn'>
                      <i className='fa fa-github'></i>Code
                    </a>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id='portfolio'>
        <Fade direction='left' duration={1000} triggerOnce>
          <div className='row'>
            <div className='twelve columns collapsed'>
              <h1>Check Out Some of My Works.</h1>

              <div id='portfolio-wrapper' className='bgrid-halves cf'>
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
