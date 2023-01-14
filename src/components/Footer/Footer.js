import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';


export default function Footer() {

  return (
    <div className='footer'>
      <a href="https://github.com/jeffbenak" title="Github">
      <FontAwesomeIcon className='footerlink' icon={faGithub} size='2x' />
      </a>
      <a href="https://www.linkedin.com/in/jeff-benak-620bb51b5/" title="LinkedIn">
      <FontAwesomeIcon className='footerlink' icon={faLinkedin} size='2x'/>
      </a>
      <a href="mailto: jeff.benak@yahoo.com" title="Email Me">
      <FontAwesomeIcon className='footerlink' icon={faEnvelope} size='2x'/>
      </a>
    </div>
  );
}