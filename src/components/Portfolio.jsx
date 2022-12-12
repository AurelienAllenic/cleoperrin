import React from 'react'
import { Parallax } from 'react-parallax';
import PortfolioIMG from "../assets/portfolio.jpg"

function Portfolio() {
    return (
        <>
            <section id="portfolio">
                <Parallax className='img' bgImage={PortfolioIMG} strength={800}>
                </Parallax>
            </section>
        </>
    )
}

export default Portfolio