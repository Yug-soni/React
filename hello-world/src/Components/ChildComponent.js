import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Child')}><h1>Greet Parent</h1></button>
        </div>
    )
}

export default ChildComponent