import React from "react";
import PanelContainer from "./panel_container";
import LoginInputs from "./right_panel/login_inputs";
import LeftPanelComponent from "./left_panel/left_panel";
import "./login.css";
import InfoPanel from "./right_panel/right_panel";

export default class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-container">
        <PanelContainer>
          <LeftPanelComponent />
        </PanelContainer>
        <PanelContainer>
          <LoginInputs />
          <InfoPanel />
        </PanelContainer>
      </div>
    );
  }
}
