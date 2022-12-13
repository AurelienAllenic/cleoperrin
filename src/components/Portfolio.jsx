import React from 'react'
import { Parallax } from 'react-parallax';
import PortfolioIMG from "../assets/portfolio.jpg"
import { Div, H1, P, DivBlock } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { project1 } from './Data';
// />
function Portfolio() {
    return (
        <>
            <section id="portfolio">
                <Parallax className='img' bgImage={PortfolioIMG} strength={800}>
                    <Div>
                        <DivBlock>
                            <H1>PROJET 1</H1>
                            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam expedita earum, corporis autem tempore consequatur, omnis distinctio ex vero, nobis error! Similique iste beatae quis rem mollitia quas id sed!</P>
                            <Caroussel images={project1} />
                        </DivBlock>
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default Portfolio