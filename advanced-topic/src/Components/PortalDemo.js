import React from "react";
import ReactDOM from "react-dom";

class PortalDemo extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>Portal Demo</h1>
      </div>,
      document.getElementById("portal-root")
    );
  }
}

export default PortalDemo;
