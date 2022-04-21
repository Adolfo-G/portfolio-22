import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName || !message) {
      setErrorMessage('Email or username is invalid or message area is empty');
      return;
    }
    setUserName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    alert(`Thank you ${userName} for reaching out!`);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <div className='form-container'>
      <form className="form">
      <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          cols={30}
          rows={10}
        >
        </textarea>
        <button className='form-btn' type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}


export default Contact;