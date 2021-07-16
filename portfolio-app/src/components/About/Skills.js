import React from 'react'
import { 
    SiCss3, 
    SiHtml5, 
    SiJavascript } from 'react-icons/si'

function Skills() {
    return (
        <div className="skills__container">
            <h3>Skills</h3>
            <span>
            <h2> <SiHtml5 style={{color: '#ff6e40'}}/> </h2>
            <h6 style={{color: '#ff6e40'}}>Html5</h6>
            </span>

            <span>
            <h2> <SiCss3 style={{color: '#1e88e5'}}/> </h2>
            <h6 style={{color: '#1e88e5'}}>Css3</h6>
            </span>

            <span>
            <h2> <SiJavascript style={{color: '#ffeb3b'}}/> </h2>
            <h6 style={{color: '#ffeb3b'}}>JavaScript</h6>
            </span>


        </div>
    )
}

export default Skills
