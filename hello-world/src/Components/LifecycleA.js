import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Yug Soni',
        }

        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA static getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Yug',
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <LifecycleB/>
                <button onClick={this.changeState}>ChangeState</button>
                <h1>LifecycleA</h1>
            </div>
        )
    }
}

export default LifecycleA
