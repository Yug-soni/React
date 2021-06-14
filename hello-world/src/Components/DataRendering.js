import React from 'react'

class DataRendering extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>I am {this.props.personData.name}, My age is {this.props.personData.age}, And my skill is {this.props.personData.skill}.</h1>
            </div>
        )
    }

}

export default DataRendering