import React from 'react';
import './Form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <form className="form">
        <input className="form__input" type="email" placeholder="Your Email" />
        <input className="form__input" type="password" placeholder="Password" />
        <button className="form__button" type="submit">Log In</button>
      </form>
    )
  }
}

export default LoginForm; 