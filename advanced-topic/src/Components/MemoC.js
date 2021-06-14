import React from 'react'

function MemoC({name}) {
    console.log('Memo Component Re-rendering')
    return (
        <div>
            <h3>{name}</h3>    
        </div>
    )
}

// By using the React.memo() function we can convert the simple 
// functional component to a higher oder component 
// And this will behave same as the pure component
// React.memo() add some extra things to the component and 
// which will prevent it from the re-renering.
export default React.memo(MemoC, (prevProps, nextProps) => {
    console.log(nextProps.name === prevProps.name)
    return nextProps.name === prevProps.name ? true : false
})
