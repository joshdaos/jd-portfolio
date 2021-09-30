import React from 'react'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="home__container">
            <Typewriter id="typewriter__content" 
            onInit={(typewriter) => {
                typewriter.typeString('Creator')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                .typeString('Designer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Developer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Josh Daos')
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
            }}
            />


            <p id="home__p-one" className="animate__animated animate__backInRight">
                An aspiring <u>Software Engineer</u>, based in the Bay Area.<br></br>
            </p>
            <p id="home__p-two" className="animate__animated animate__backInUp">
                Creator. Designer. Developer.
            </p>

            <div className="circles">
                <span className="circle__one"></span>
                <span className="circle__two"></span>
                <span className="circle__three"></span>
            </div>

        </div>
    )
}

export default Home
