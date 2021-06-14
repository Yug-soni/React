import React from 'react'

class EventBind extends React.Component {

    constructor() {
        super() 
        this.state = {
            message: 'Hello !'
        }

        // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage() {
    //     this.setState(
    //         (previousState, props) => ({
    //             message: 'Hello, to yug soni',
    //         })
    //     )
    // }

    changeMessage = () => {
        this.setState({
            message: 'Good Bye !'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.changeMessage.bind(this)}>Say hello to me</button> */}
                {/* <button onClick={() => this.changeMessage()}>Say hello to me</button> */}
                <button onClick={this.changeMessage}>Say hello to me</button>
            </div>
        )
    }

}

export default EventBind