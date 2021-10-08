import React, { useRef} from 'react';
import SideIcons from './sideIcon';
import LandingPage from './landingPage';
import Contact from "./contact";
import NavBar from './navbar';
import ProjectsAndTools from './projectsAndToolsSection';
import resumePDF from "../documents/Tomislav_Zigo_Resume.pdf";


import About from './about';

const Home = () => {

    const landingPageContainer = useRef(null);
    const projectsAndToolsPageContainer = useRef(null);
    const aboutPageContainer = useRef(null);
    const contactPageContainer = useRef(null);

        const icons = [
            {icon : "faGithub" , link : "https://github.com/tomislav-zigo", label : "GitHub"},
            {icon : "faLinkedin" , link : "https://www.linkedin.com/in/tomislav-zigo-5612a4210/", label : "LinkedIn"},
            {icon : "faFile" , link : resumePDF, label : "Résumé"}
        ]

        const navigation = [
            { name: 'Home', current: false , scrollRef : landingPageContainer},
            { name: 'Projects', current: false , scrollRef :projectsAndToolsPageContainer},
            { name: 'About', current: false ,  scrollRef :aboutPageContainer},
            { name: 'Contact', current: false , scrollRef :contactPageContainer}
        ]

        return (
            <React.Fragment>
            <NavBar navigation = {navigation}/>
            <div className = "flex flex-col items-center pt-48 h-screen text-white width-auto" ref = {landingPageContainer}>
                {<LandingPage scrollRef = {projectsAndToolsPageContainer}/>}
            </div>
            <div className = "flex flex-col items-center pt-8 h-full pb-0 sm:h-screen sm:pb-24 text-white width-auto relative" ref = {projectsAndToolsPageContainer}>
                {<ProjectsAndTools />}
            </div>  
            <div className = "flex flex-col items-center pt-8 h-full pb-0 sm:h-screen sm:pb-24 text-white width-auto relative overflow-x-hidden" ref = {aboutPageContainer}>
                {<About/>}
            </div>  
            <div className = "flex flex-col items-center pt-8 h-full pb-0 sm:h-screen sm:pb-24 text-white width-auto relative" ref = {contactPageContainer}>
                {<Contact/>}
            </div>  
            <SideIcons
                    icons = {icons}
            />    
            </React.Fragment>
        );
}
 
export default Home;