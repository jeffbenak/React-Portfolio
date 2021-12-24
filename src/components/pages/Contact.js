import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !Name) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message) {
      setErrorMessage(
        `You must include a message ${Name}`
      );
      return;
    }
  
  
    alert(`Hello ${Name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
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

