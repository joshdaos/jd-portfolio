import React from 'react'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="home__container">
            <Typewriter className="typewriter__content"
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


            <p className="home__p-one">
                A 23-year-old <u>Software Engineer</u>, Bay Area based.<br></br>
            </p>
            <p className="home__p-two">
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
