import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const ScrollDownPrompt = ({scrollRef}) =>{
    
    return(
        <div className = "w-100vw h-100 text-center absolute top-95vh left-1/2 flex flex-col items-center" >
            
            <FontAwesomeIcon 
                className = "opacity-50 text-white text-xl hover:opacity-100"
                icon = {faChevronCircleDown}
                onClick = {()=> scrollRef.current.scrollIntoView({behavior:"smooth"})}
            />
        </div>
    )
}


export default ScrollDownPrompt;