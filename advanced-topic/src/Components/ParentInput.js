import React from 'react'
import ChildInput from './ChildInput'

class ParentInput extends React.Component {

    constructor(props) {
        super(props)
        this.childReference = React.createRef()
    }
    
    setFocusToChildComponent = () => {
        this.childReference.current.setFocusToInputReference()
    }

    render() {
        return (
            <div>
                <ChildInput ref={this.childReference}></ChildInput>
                <button onClick={this.setFocusToChildComponent}>SET FOCUS TO CHILD COMPONENT</button>
            </div>
        )
    }
}

export default ParentInput
