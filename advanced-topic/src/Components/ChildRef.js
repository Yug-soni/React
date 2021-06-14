import React from 'react'

const ChildRef = React.forwardRef( (props, reference) => {
    return (
        <div>
            <input type='text' ref={reference}></input>
        </div>
    )
})


export default ChildRef
