import React from "react";
import withCounter from "./withCounter";

class ClickCounter extends React.Component {
  render() {
    const { count, clickHandler, name } = this.props;

    return (
      <div>
        <button onClick={clickHandler}>
          {name} Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 11);
