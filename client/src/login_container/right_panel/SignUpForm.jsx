import React from 'react';
import './Form.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <form className="form">
        <input className="form__input" type="email" placeholder="Enter Your Email" />
        <input className="form__input" type="password" placeholder="Password" />
        <button className="form__button" type="submit">Sign Up</button>
      </form>

    )
  }
}

export default SignUpForm;