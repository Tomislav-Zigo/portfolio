import React from 'react';
import TypedComponent from './typedComponent';
import ProjectCard from "./projectCard"

const ProjectsContainer = () =>{

    const typedStrings = ["Quality design" , "Modern technologies" , "Always learning" , "Good practices"];

    return(
        <React.Fragment>
            <div className = "bg-gray-900 bg-opacity-50 p-3 rounded-md shadow m-1">
                <div className = "pb-2 text-lg font-bold"> <TypedComponent strings = {typedStrings}/></div>
                <div className = "grid grid-cols-2 gap-1">
                    <ProjectCard
                        image = "" 
                        title = "Chess"
                        caption ="A two player chess game using html canvas"
                        github = "asd"
                        livelink = "asd"
                    />
                    <ProjectCard
                        image = ""
                        title = "E-commerce mockup"
                        caption ="An example e-commerce website frontend"
                        github = "asd"
                        livelink = "asd"
                    />
                    {/* Use wooCommerce to get example database for ecommerce website */}
                    <ProjectCard
                        placeholderBoolean = "true"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectsContainer;