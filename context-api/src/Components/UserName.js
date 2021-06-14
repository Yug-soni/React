import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class UserName extends Component {
  render() {
    return (
      <UserConsumer>{(username) => <h1>Hello {username}</h1>}</UserConsumer>
    );
  }
}

export default UserName;
