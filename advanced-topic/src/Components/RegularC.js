import React from 'react'

class RegularC extends React.Component {
    
    render() {
        console.log('Regular Component')
        return (
            <div>
                <h3>Reagular Component made by :- {this.props.name}</h3>
            </div>
        )
    }
}

export default RegularC
