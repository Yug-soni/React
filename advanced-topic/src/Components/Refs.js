import React from 'react'

class Refs extends React.Component {

    constructor(props) {
        super(props)
        this.inputReference = React.createRef();

        //This is the another approach for creating the refs
        this.callbackReference = null
        this.setCallbackReference = element => {
            this.callbackReference = element
        }
    }

    componentDidMount() {
        // this.inputReference.current.focus()
        if(this.callbackReference != null) {
            this.callbackReference.focus()
        }
    }    

    clickHandler = () => {
        // alert(this.inputReference.current.value)
        // this.inputReference.current.value = ''
        // this.inputReference.current.focus()
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputReference}></input><br></br>
                <input type='text' ref={this.setCallbackReference}></input><br></br>

                <button onClick={this.clickHandler}>Alert</button>
            </div>
        )
    }
}

export default Refs
