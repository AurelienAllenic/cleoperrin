import React from 'react'
import { Parallax } from 'react-parallax';
import AboutIMG from "../assets/about.jpg"

function About() {
    return (
        <>
            <section id="about">
                <Parallax className='img' bgImage={AboutIMG} strength={800}>
                </Parallax>
            </section>
        </>
    )
}

export default About