import React from 'react';

const Hello = () => {
    //This is the jsx version of the hello component
    // return (
    //     <div id = "Hello" className="dummyClass">
    //         <h1>Hello Yug</h1>
    //     </div> 
    // )

    //Now we are writing the javascript version of the hello component
    return React.createElement(
        'div', 
        {
            id: "sayHello",
            className: "dummyClass"
        }, 
        React.createElement('h1', null, 'Hello Yug')
        );
}

export default Hello;