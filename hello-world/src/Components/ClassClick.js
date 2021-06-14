import React from 'react'

class ClassClick extends React.Component {

    constructor() {
        super() 
        this.state = {

        }
    }

    clickHandler() {
        console.log('Button Clicked.')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }
}

export default ClassClick