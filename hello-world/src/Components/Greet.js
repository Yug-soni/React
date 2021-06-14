import React from 'react';

// function Greet() {
//     return (
//         <h1> Hello Yug </h1>
//     )
// };

const Greet = props => {
    // console.log(props);
    return (
        <div>
            <h1>HELLO {props.name} and age is = {props.age}</h1>
            {props.children}
        </div>
    )
};

export default Greet;