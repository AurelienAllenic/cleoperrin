import React from 'react'
import { Parallax } from 'react-parallax';
import PortfolioIMG from "../assets/portfolio.jpg"
import { Div, H1, P, DivBlock } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { project1 } from './Data';
import { MainTitle } from "../style/General"

function Design() {
    return (
        <>
            <section id="design">
                <Parallax className='img' bgImage={PortfolioIMG} strength={800}>
                    <MainTitle>Design</MainTitle>
                    <Div>
                        <DivBlock>
                            <H1>Scalable nature</H1>
                            <P>modules en tôle perforée
                                Inspirés par l’univers de la faune et de la flore,
                                <br />
                                Scalable Nature est un kit de
                                modules qui peuvent être simplement assemblés entre eux.
                                <br />
                                Transformez votre intérieur et vos
                                objets du quotidien en leur donnant un aspect coloré et organique. </P>
                            <Caroussel images={project1} />
                        </DivBlock>
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default Design