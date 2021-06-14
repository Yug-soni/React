import React, { Component } from "react";

class User extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>{name(false)}</h1>
      </div>
    );
  }
}

export default User;
