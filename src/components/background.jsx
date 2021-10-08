import React from 'react';


const Background = ({color, opacity}) =>{
    return(
        <div className = {`fixed top-0 left-0 bg-${color} bg-opacity-100 w-full h-full` }>

        </div>
    )
}

export default Background;