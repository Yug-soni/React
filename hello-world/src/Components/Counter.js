import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        }
    }
    
    increment() {
        // this.setState(
        //     {
        //     // These update are the async
        //     count : this.state.count + 1,
        //     },
        //     // Callback Function
        //     () => {
        //         console.log('Value of the count is :- ',this.state.count)
        //     }
        // )

        // Here we are using the prevState as previous state and
        // making the updates on to the prevState not on to the current State
        // Here we are using the arrow functions which is returning
        // the object
        this.setState(
            prevState => ({
                count: prevState.count + 1,
            })
        )
    }

    // The call to increment is done in the group calls
    // So five concurrent calls will be done to the increment Function
    // Not the in the order of writing the call
    incrementByFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    resetCount() {
        this.setState(
            (previousState, props) => ({
                count: 0,
                })
            )
    }

    render() {
        return (
            <div>
               <h1>Count - {this.state.count}</h1>
               <button onClick={() => this.incrementByFive()}>Increment</button>
               <br></br>
               <button onClick={ () => this.resetCount()}>Reset</button>
            </div>
        )
    }
}

export default Counter
