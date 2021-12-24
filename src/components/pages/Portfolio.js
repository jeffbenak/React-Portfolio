import React from 'react';
import java from '../images/Javascript.jpg'
import node from '../images/node.png'
import express from '../images/express.png'
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
   {/* <p id='P4'>Project 4</p> */}
    {/* <a href="https://github.com/jeffbenak/Professional-README-Generator">
    <img id='web' className='image' src={java} alt="Web Design"></img>
    </a> */}
    <div className="container">
  <img id='web' className='image' src={java} alt="Web Design"></img>
  <div className="hover">
  <a href="https://jeffbenak.github.io/Work-Day-Scheduler/Develop/">
    <p id='jv'>Work Day Scheduler</p>
    </a>
    <a href='https://github.com/jeffbenak/Work-Day-Scheduler'>
    <i id='wds' className="fab fa-github-square fa-3x"></i>
    </a>
    <div className="text">Javascript</div>
  </div>
  </div>

  <div className='nodecont'>
  <img id="mern" src={node} alt="Node"></img>
  <div className='nodejs'>
  <a href="https://pure-retreat-52338.herokuapp.com/">
  <p id='nd'>Space App</p>
  </a>
  <a href='https://github.com/krysmit/space-app'>
  <i id='sa' className="fab fa-github-square fa-3x"></i>
  </a>
  <div id='njs'>Node.js</div>

  </div>
  </div>

  <div className='expresscont'>
  <img id="express" src={express} alt="Node"></img>
  <div className='expressjs'>
  <a href="https://express-note-taker-jb.herokuapp.com/notes">
  <p id='ex'>Note Taker</p>
  </a>
  <a href='https://github.com/jeffbenak/Express.js-Note-Taker'>
  <i id='nt' className="fab fa-github-square fa-3x"></i>
  </a>
  <div id='exjs'>Express.js</div>

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
