import React from 'react'

class UserGreeting extends React.Component {

    constructor(props) {
        super()
        this.state = {
            isLoggedIn: true,
        }
    }

    render() {

        return this.state.isLoggedIn && <div><h1>Welcome YUG</h1></div>

        // return this.state.isLoggedIn ?
        // (
        //     <div>
        //         <h1>Welcome YUG</h1>
        //     </div>
        // ) : (
        //     <div>
        //         <h1>Welcome GUEST</h1>
        //     </div>
        // )
        
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div><h1>Welcome YUG</h1></div>
        // } else {
        //     message = <div><h1>Welcome GUEST</h1></div>
        // }

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <h1>
        //                 Welcome YUG
        //             </h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>
        //                 Welcome GUEST
        //             </h1>
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <h1>Welcome YUG</h1>
        //         <h1>Welcome Guest</h1>
        //     </div>
        // )
    }

}

export default UserGreeting