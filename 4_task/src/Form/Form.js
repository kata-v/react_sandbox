import React from 'react';
import './Form.css';

const Form = () => {
    return (
      <div className="formContainer">
  <label for="firstName">First name: <input type="text" name="firstName" id="firstName"/></label>
  <label for="lastName">Last name: <input type="text" name="lastName" id="lastName"/></label>
  <label for="phone">Phone number: <input type="tel" name="phone" id="phone"/></label>
  <label for="message">Message: <input type="text" name="message" id="message" /></label>
  
      </div>
    );
  };

  export default Form;