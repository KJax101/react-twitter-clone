import React, { Component } from "react";
const style = {
  panelContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  sectionText: { color: "rgba(50, 170, 249, 0.9)" }
};

export default class InfoPanel extends Component {
  infoSection = sectionText => (
    <div>
      <h2 style={style.sectionText}>{sectionText}</h2>
    </div>
  );
  render() {
    return (
      <div style={style.panelContainer}>
        <div>
          {this.infoSection("What Interests You?")}
          {this.infoSection("What's The Buzz?")}
          {this.infoSection("Join In the Conversation.")}
        </div>
      </div>
    );
  }
}
