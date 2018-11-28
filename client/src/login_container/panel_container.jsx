import React from "react";

export default class PanelContainer extends React.Component {
  render() {
    return <div id="panel-container">{this.props.children}</div>;
  }
}
