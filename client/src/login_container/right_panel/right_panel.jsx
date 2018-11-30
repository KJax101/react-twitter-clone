import React, { Component } from "react";
import "./right_panel.css";
import ModalExample from "./ModalExample.jsx"

export default class InfoPanel extends Component {
  render() {
    return (
      <div className="InfoPanelContainer">
        <div className="text">See What's Happening</div>
        <div className="loginButtons">
          <h3 className="contentHeader">Join Today</h3>
          <div>
            <button className="LoginButton SignUp">Sign Up</button>
            <button className="LoginButton">Log In</button>
            <ModalExample />
          </div>
        </div>
      </div>
    );
  }
}
