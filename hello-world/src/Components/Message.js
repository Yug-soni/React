import React from 'react'

class Message extends React.Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visistor',
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for Welcome'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Welcome</button>
            </div>
        )
    }
}

export default Message