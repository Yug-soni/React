import React, { Component } from "react";
import UserName from "./UserName";
// import UserContext from "./userContext";

class NavBar extends Component {
  // static contextType = UserContext;

  render() {
    return (
      <div>
        {/* Context type of NavBar is :- {this.context} */}
        <UserName></UserName>
      </div>
    );
  }
}

export default NavBar;
