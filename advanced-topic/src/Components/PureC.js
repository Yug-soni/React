import React from 'react'

class PureC extends React.PureComponent {
    render() {
        console.log('Pure Component')
        return (
            <div>
                <h3>Pure Component made by :- {this.props.name}</h3>
            </div>
        )
    }
}

export default PureC
