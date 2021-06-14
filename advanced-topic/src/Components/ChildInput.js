import React from 'react'

class ChildInput extends React.Component {

    constructor(props) {
        super(props)
        this.inputReference = React.createRef()
    }

    setFocusToInputReference = () => {
        this.inputReference.current.focus()
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputReference}></input>
            </div>
        )
    }
}

export default ChildInput
