import React from 'react';
import LogoCard from './logoCard';

const ToolBox = ({items , caption}) =>{
    return(
        <React.Fragment>
            <div className = "bg-gray-900 bg-opacity-50 p-3 rounded-md shadow m-1">
                <div className = "pb-2 text-lg font-bold">{caption}</div>
                <div className = "grid grid-cols-2 gap-1">
                    {items.map( i => {
                        return (<LogoCard
                            key = {i.caption} 
                            image = {i.image}
                            caption = {i.caption}
                        />)
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ToolBox;