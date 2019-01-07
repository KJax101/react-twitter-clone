import React, { Component } from "react";
import "./right_panel.css";
import API from "../../utils/API";

export default class LoginInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We set a default value for username. We can change this to whatever you want.
      username: "",
      // The state values below are here just as examples. We aren't actually using them.
      password: "",
      success: false
    };
  }

  handleChange = (value, name) => {
    console.log("before change", this.state);

    this.setState(
      {
        [name]: value
      },
      () => {
        // this is a callback function. Callback functions are called after the function itself finishes.
        // this is the reason why this.state displays the changed state here.
        console.log("done updating", this.state);
      }
    );

    console.log("after change", this.state);
  };

  // This we used just do display the html input we are rendering below
  renderInput = (name, type, placeholder) => (
    <div className="login-input-container">
      <input
        className="login-input"
        name={name}
        type={type}
        value={this.state[name]}
        onChange={event => this.handleChange(event.target.value, name)}
        placeholder={placeholder}
      />
    </div>
  );

  logInput = () => {
    console.log("signing up user: ", this.state.username, this.state.password);

    // e.preventDefault();
    API
      .register({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res);
        this.setState({ success: res })

      })
      .catch(err => console.log(err.response.data));
  };
  render() {
    return (
      <div className="LoginInputContainer">
        {/* We're rendering the input here with a few arguments */}
        {this.renderInput("username", "text", "Username or Email")}
        {this.renderInput("password", "password", "Password")}
        <button className="login-submit" onClick={() => this.logInput()}>
          Login
        </button>
      </div>
    );
  }
}
