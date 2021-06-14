import React from 'react'
import MemoC from './MemoC'
// import PureC from './PureC'
// import RegularC from './RegularC'

class ParentC extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Yug Soni'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Yug Soni'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Component')
        return (
            <div>
                <h1>Parent Component</h1>
                <MemoC name={this.state.name}></MemoC>
                {/* <PureC name={this.state.name}></PureC>
                <RegularC name={this.state.name}></RegularC> */}
            </div>
        )
    }
}

export default ParentC
