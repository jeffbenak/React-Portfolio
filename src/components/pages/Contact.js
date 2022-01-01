import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !Name) {
      setErrorMessage('Email or username is invalid');
  
      return;
    }
    if (!message) {
      setErrorMessage(
        `You must include a message ${Name}`
      );
      return;
    }
  
  
    alert(`Hello ${Name}`);

    setName('')
    setEmail('');
    setMessage('');
  };

  return (
    <div class='contact'>
      <h4 id='cont'>Contact</h4>
      <form class='inputs'>
        <p id='nm'>Name:</p>
        <input id='name'
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
        />
        <p id='em'>Email address:</p>
        <input id='email'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
        />
        <p id='ms'>Message:</p>
        <input id='message'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
        />
        <button id='sub' type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <footer>
      <div>
        <a href="https://github.com/jeffbenak" title="Github">
      <i id="contfoot" className="fab fa-github fa-2x"></i>
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
};

export default Contact;

