import React from 'react'
import { Parallax } from 'react-parallax';
import AboutIMG from "../assets/about.jpg"
import Chair from "../assets/chair.jpg"
import { P, Img, Div } from "../style/About"
import { MainTitle } from "../style/General"

function About() {
    return (
        <>
            <section id="about">

                <Parallax className='img' bgImage={AboutIMG} strength={800}>
                    <MainTitle>A Propos</MainTitle>
                    <Div>
                        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum necessitatibus alias praesentium eligendi quod doloribus, ab possimus quae nemo voluptatibus at, mollitia perspiciatis reiciendis unde eum illo inventore cum beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum necessitatibus alias praesentium eligendi quod doloribus, ab possimus quae nemo voluptatibus at, mollitia perspiciatis reiciendis unde eum illo inventore cum beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum necessitatibus alias praesentium eligendi quod doloribus, ab possimus quae nemo voluptatibus at, mollitia perspiciatis reiciendis unde eum illo inventore cum beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum necessitatibus alias praesentium eligendi quod doloribus, ab possimus quae nemo voluptatibus at, mollitia perspiciatis reiciendis unde eum illo inventore cum beatae.</P>
                        <Img src={Chair} alt="chair" />
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default About