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
    <div className='portfolio'>
      <h1>Portfolio</h1>

<div className="flexbox">
    <div className="container">
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
    </div>
  );
}
