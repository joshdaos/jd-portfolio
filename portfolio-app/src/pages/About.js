import React from 'react'
import Bio from '../components/About/Bio'
import Skills from '../components/About/Skills'

function About() {
    return (
        <div className="about__container">
            <h3>Learn more About Me</h3> 
            <Bio />
            <Skills />

        </div>
    )
}

export default About
