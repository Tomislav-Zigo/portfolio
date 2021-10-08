import React from 'react';
import TailwindLogo from "../images/twitter-square.daf77586b35e90319725e742f6e069f9.jpg";
import ReactLogo from "../images/react-logo-512x512.png";
import BootstrapLogo from "../images/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.png";
import JavaScriptLogo from "../images/1024px-Unofficial_JavaScript_logo_2.svg.png";
import GithubLogo from "../images/github-logo-5F384D0265-seeklogo.com.png";
import ProjectsContainer from './projectsContainer';
import ToolBox from "./toolBox";

const ProjectsAndTools = () =>{

    const logoCards = [
        {image : ReactLogo, caption : "React"},
        {image : GithubLogo, caption : "Git"},
        {image : BootstrapLogo, caption : "Bootstrap"},
        {image : JavaScriptLogo, caption : "JavaScript"},
        {image : TailwindLogo, caption : "Tailwind CSS"}
    ]
    
    return(      
        <div className = "flex flex-col sm:flex-row items-center">
            <ToolBox 
            items = {logoCards}
            caption = {"My Tools"}
            />
            <ProjectsContainer
            />
        </div>
    )
}

export default ProjectsAndTools;