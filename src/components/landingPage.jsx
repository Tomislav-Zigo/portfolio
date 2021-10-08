import {Link} from 'react-router-dom';
import Bitmoji from "../images/bitmoji.PNG";
import Emoji from "./emoji";
import ScrollDownPrompt from './scrollDownPrompt';

const LandingPage = ({scrollRef}) =>{
    
    
    return (
    <div className = "flex flex-row items-center rounded shadow transition ">
    <div className = "items-center flex flex-col sm:items-start p-3 w-64 pb-6 rounded bg-gray-900 mx-1 bg-opacity-50 ">
        <h2 className = "my-2 mt-1 text-2xl font-bold">
            Hello there <Emoji label = "Hello" className = "animate-spin" symbol = "👋"/>
        </h2>
        <p className = "my-2 h-32 text-center sm:text-left text-gray-300">
            I am a front end developer looking to assist your organization.
        </p>
        <Link 
            to = "/contact"
            className = "transition duration-250 bg-green-500 hover:bg-green-600 rounded-full px-4 py-3"
        >Get in touch
        </Link>
    </div>
    <div className = "w-24 h-full rounded bg-gray-900 bg-opacity-50 hidden sm:flex flex-row items-center justify-center w-64 shadow">
        <img 
            className = "my-auto h-48 w-48"
            src = {Bitmoji}
            alt = ""
        ></img>
    </div>
    <ScrollDownPrompt scrollRef = {scrollRef}/>
    </div>
    )
}

export default LandingPage;