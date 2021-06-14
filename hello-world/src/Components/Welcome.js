import React from 'react';

class Welcome extends React.Component {
    render() {
        return <h1>WELCOME {this.props.name} and age is = {this.props.age}</h1>;
    }
}

export default Welcome;