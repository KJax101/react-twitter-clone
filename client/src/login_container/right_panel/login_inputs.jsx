import React, { Component } from "react";
import "./right_panel.css";

export default class LoginInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We set a default value for username. We can change this to whatever you want.
      username: "test user",
      // The state values below are here just as examples. We aren't actually using them.
      password: "",
      savedUsers: ["user@user.com", "user2@user.com"],
      savedUserNames: { name1: "test123" }
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
  renderInput = (name, type) => (
    <div className="login-input-container">
      <input
        className="login-input"
        name={name}
        type={type}
        value={this.state[name]}
        onChange={event => this.handleChange(event.target.value, name)}
      />
    </div>
  );

  logInput = () => {
    console.log(this.state.username, this.state.password);
  };
  render() {
    return (
      <div className="LoginInputContainer">
        {/* We're rendering the input here with a few arguments */}
        {this.renderInput("username", "text")}
        {this.renderInput("password", "password")}
        <button className="login-submit" onClick={() => this.logInput()}>
          Submit
        </button>
      </div>
    );
  }
}
