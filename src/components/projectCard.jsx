import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({image , title , caption , github , livelink , placeholderBoolean}) =>{
    
    if(placeholderBoolean) return(
        <div className="flex flex-row items-center justify-between bg-transparent rounded-lg p-0 col-span-2 w-64 h-36"></div>
    )

    return(
        <div className="flex flex-row items-center justify-between bg-white rounded-lg shadow-lg p-0 col-span-2 w-64 h-36">
            <div className="p-2 flex flex-col">
              <h2 className="font-bold text-md text-gray-800 leading-none mb-1">{title}</h2>
              <p className = "text-black leading-none">{caption}</p>
              <div>
                {github && <a href = {github} target="_blank" rel="noreferrer"><FontAwesomeIcon className = "text-black mr-2 hover:text-purple-800" icon = {faGithub}/></a>}
                {livelink && <a href = {livelink} target="_blank" rel="noreferrer"><FontAwesomeIcon className = "text-black hover:text-blue-800" icon = {faGlobe}/></a>}
              </div>
            </div>
            <div className = "">
              <img src= {image} alt="" className=" h-36 w- rounded-r-md"/>
            </div>
        </div>
    )
}

export default ProjectCard