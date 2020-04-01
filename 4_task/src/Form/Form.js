import React from 'react';


const Form = () => {
    return (
      <div>
  <label for="firstName">First name: <input type="text" name="firstName" id="firstName"/></label>
  <label for="lastName">Last name: <input type="text" name="lastName" id="lastName"/></label>
  <label for="phone">Phone number: <input type="tel" name="phone" id="phone"/></label>
  <label for="message">Message: <input type="text" name="message" id="message" /></label>
  
      </div>
    );
  };

  export default Form;