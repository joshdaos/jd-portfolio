import React from 'react'
import Bio from '../components/About/Bio'
import Skills from '../components/About/Skills'

function About() {
    return (
        <div className="about__container">
            <h2>Learn more About Me</h2> 
            <Bio />
            <Skills />

        </div>
    )
}

export default About
