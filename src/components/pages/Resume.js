import React from 'react';

export default function About() {
  return (
    <div>
      <br></br>
      <h4 id='rezz'>Resume</h4>
      <br></br>
      <p class='fe'>
        <h4 id='front'>Front-end Proficiencies</h4>
        
        <ul class='fend'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
        </p>

        <p class='be'>
          <h4 id='back'>Back-end Proficiencies</h4>
          <ul class='bend'>
            <li>Node</li>
            <li>Express</li>
            <li>APIs</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </p>

        <footer>
      <div>
        <a href="https://github.com/jeffbenak" title="Github">
      <i id="resfoot" className="fab fa-github fa-2x"></i>
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
