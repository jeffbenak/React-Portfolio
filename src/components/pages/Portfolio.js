import React from 'react';
import java from '../images/Javascript.jpg'
import node from '../images/node.png'
import express from '../images/express.png'
import code from '../images/coding.jpeg'

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

<div className="flexbox">
    <div className="container">
  <img id='web' className='image' src={java} alt="Javascript"></img>
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
  <img id="express" src={express} alt="Express"></img>
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

  <div className='codecont'>
  <img id="code" src={code} alt="code"></img>
  <div className='coding'>
  <a href="https://jeff-budget-tracker.herokuapp.com/">
  <p id='offon'>Online/ Offline Budget Tracker</p>
  </a>
  <a href='https://github.com/jeffbenak/Online-Offline-Budget-Tracker'>
  <i id='bt' className="fab fa-github-square fa-3x"></i>
  </a>
  <div id='codejs'>Mongoose</div>

  </div>
  </div>

</div>

<footer className='footer'>
      <div className='portfoliofooter'>
        <a href="https://github.com/jeffbenak" title="Github">
      <i id="portfoot" className="fab fa-github fa-2x"></i>
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
