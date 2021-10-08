import React from 'react';
import Otok from "../images/otok_rab.jpg";

class About extends React.Component {
    render() { 
        return (
            <div className = "flex flex-row m-2 mt-24 rounded-lg text-white h-auto bg-gray-900 sm:h-56">
                <div className = "p-4">
                    <h2 className = "text-lg font-bold">About me</h2>
                    <p className = "text-md w-auto sm:w-96 border-t-2 text-gray-300">I started my web development journey 2 years ago and I have been gaining knowledge about the frontend ecosystem ever since.</p>
                    <p className = "text-md w-auto sm:w-96 mt-3 text-gray-300" >My goal is to build modern, friendly and innovative websites. Good practice and constant improvement are my top priorities.</p>
                </div>
                <img src = {Otok} alt = "me on island of Rab in Croata" className = "h-full w-auto rounded-r-lg hidden sm:flex"></img>
            </div>
        );
    }
}
 
export default About;