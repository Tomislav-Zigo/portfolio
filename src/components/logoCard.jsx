import React from 'react';

const LogoCard = ({image , caption}) =>{
    return(
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-2">
        <div className = "">
          <img src= {image} alt="" className=" h-24 w-24"/>
        </div>
        <div className="p-1">
          <h2 className="font-bold text-md text-gray-800">{caption}
          </h2>
        </div>

      </div>
    )
}

export default LogoCard