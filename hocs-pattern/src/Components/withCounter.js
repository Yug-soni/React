import React from "react";

const withCounter = (WrappedComponent, incrementBy) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    clickHandler = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementBy,
      }));
    };

    render() {
      return (
        <div>
          <WrappedComponent
            count={this.state.count}
            clickHandler={this.clickHandler}
            {...this.props}
          />
        </div>
      );
    }
  }

  return WithCounter;
};

export default withCounter;
