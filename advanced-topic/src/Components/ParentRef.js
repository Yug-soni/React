import React from 'react'
import ChildRef from './ChildRef'

class ParentRef extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    setTheFocus = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <ChildRef ref={this.inputRef}></ChildRef>
                <button onClick={this.setTheFocus}>Focus Input</button>
            </div>
        )
    }
}

export default ParentRef
