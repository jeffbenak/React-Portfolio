import React from 'react';
import Footer from '../Footer/Footer'
import Resume from '../Resume/Jeffrey-Benak-Resume.pdf'

export default function About() {
  return (
    <div className='resume'>

      <div className='resumecontent'>
      <h3 className='res bold'>Resume</h3>

      <div className='resumelink'>
      <p className='dlink'>Download
      <a href={Resume}>My Resume</a>
      </p>
      </div>

      <div class='fe'>
      <h4 id='front'>Front-end Proficiencies</h4>
        
        <ul class='fend'>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Jquery</li>
          <li>Bootstrap</li>
        </ul>
        </div>

        <div class='be'>
          <h4 id='back'>Back-end Proficiencies</h4>
          <ul class='bend'>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>APIs</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </div>

        </div>


      <Footer></Footer>

    </div>
  );
}
