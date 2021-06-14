import React from 'react'
import DataRendering from './DataRendering'

class ListRendering extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        let data = [
            {
                id: 1,
                name: 'Yug',
                age: 21,
                skill: 'Java'
            }, 
            {
                id: 2,
                name: 'Amit',
                age: 20,
                skill: 'wasting time'
            },
            {
                id: 3,
                name: 'Sourabh',
                age: 19,
                skill: 'watching anime'
            }
        ]
        let dataList = data.map(personData => <DataRendering key={personData.id} personData={personData}></DataRendering>)
        return (
            <div>
                {
                    dataList
                }
            </div>
        )
    }

}

export default ListRendering