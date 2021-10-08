import React from 'react';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import * as  Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideIcons = ({icons}) =>{
    
    return(
        <div className = "fixed flex flex-col bottom-3 right-3">
            {icons.map(i =>{
                return(
                    <a href = {i.link} rel="noreferrer" target="_blank" key = {i.link+i.label} className="flex flex-row items-center justify-between opacity-50 text-white hover:opacity-100 py-1 sm:py-0">
                    <div className = "hidden sm:block overflow-hidden">
                        <div className = "transition transform translate-x-16 hover:translate-x-0 pl-12">{i.label}</div>
                    </div>
                    <FontAwesomeIcon 
                        icon = {Brands[i.icon] || Icons[i.icon]}
                        className= "mx-1"
                    /></a>
                )
            })}
            
        </div>
    )
}

export default SideIcons;