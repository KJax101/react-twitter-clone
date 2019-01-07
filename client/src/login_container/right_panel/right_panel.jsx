import React, { Component } from "react";
import "./right_panel.css";
import MyModal from "./MyModal.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";

export default class InfoPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginOpen: false,
      signupOpen: false
    }
  }

  setLoginOpen = (loginOpen) => {
    return () => this.setState({ loginOpen })
  }

  setSignUpOpen = (signupOpen) => {
    return () => this.setState({ signupOpen })
  }

  render() {
    return (
      <div className="InfoPanelContainer">
        <div className="text">See What's Happening</div>
        <div className="loginButtons">
          <h3 className="contentHeader">Join Today</h3>
          <div>
            <button className="LoginButton SignUp" onClick={this.setSignUpOpen(true)}>Sign Up</button>
            <button onClick={this.setLoginOpen(true)} className="LoginButton">
              Log In
            </button>
            <MyModal open={this.state.loginOpen} onClose={this.setLoginOpen(false)}>
              <LoginForm />
            </MyModal>
            <MyModal open={this.state.signupOpen} onClose={this.setSignUpOpen(false)}>
              <SignUpForm />
            </MyModal>
          </div>
        </div>
      </div>
    );
  }
}
