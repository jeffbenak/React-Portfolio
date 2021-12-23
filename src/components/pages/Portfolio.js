import React from 'react';
import java from '../images/Javascript.jpg'
// import Project from '../Project';

export default function Portfolio() {
  const projects = [
    {
      title: '',
      image: '',
      github: '',
      liveLink: ''
    }
  ];

  return (
    <div>
      <h1>Portfolio</h1>
    {/* {projects.map(project => (
      <Project project={project}/>
    ))} */}

<div className="flexbox">
    <div className="container">
   {/* <p id='P4'>Project 4</p> */}
    <a href="https://github.com/jeffbenak/Professional-README-Generator">
    <img id='web' src={java} alt="Web Design"></img>
    </a>
    <div className='hover'>
      <p className='text'>README Generator</p>
    </div>
  </div>

</div>

<footer>
      <div>
        <a href="https://github.com/jeffbenak" title="Github">
      <i id="gitfoot" className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/jeff-benak-620bb51b5/" title="LinkedIn">
      <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="mailto: jeff.benak@yahoo.com" title="Email Me">
      <i id='emailfoot' className="fas fa-envelope-square fa-2x"></i>
      </a>
      </div>
      </footer>
    </div>
  );
}
