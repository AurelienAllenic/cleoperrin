import React from 'react'
import { Parallax } from 'react-parallax';
import PortfolioIMG from "../assets/test.jpg"
import { Div, H1, P, DivBlock, ContainerProjects } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { scalables, venti, prisma, suresnes, residential, artificial } from './Data';
import { MainTitleSection, MainTitleSectionPortfolio, SpanLocation, SpanLocation2 } from "../style/General"
import "../index.css"

function Design() {
    return (
        <>
            <SpanLocation id='design'></SpanLocation>
            <Parallax className='img-portfolio' bgImage={PortfolioIMG} strength={1500}>
                <MainTitleSection>Portfolio</MainTitleSection>
                <ContainerProjects>
                    <Div>
                        <DivBlock>
                            <MainTitleSectionPortfolio>Design</MainTitleSectionPortfolio>
                            <Caroussel images={venti} />
                        </DivBlock>
                        <DivBlock>
                            <Caroussel images={scalables} />
                        </DivBlock>
                        <DivBlock>
                            <Caroussel images={prisma} />
                        </DivBlock>
                        <DivBlock>
                            <Caroussel images={artificial} />
                        </DivBlock>
                        <SpanLocation2 id='space'></SpanLocation2>
                        <DivBlock>
                            <MainTitleSectionPortfolio>Espaces Publics</MainTitleSectionPortfolio>
                            <Caroussel images={suresnes} />
                            <SpanLocation id='residential'></SpanLocation>
                        </DivBlock>
                        <DivBlock>
                            <MainTitleSectionPortfolio>Résidentiel</MainTitleSectionPortfolio>
                            <Caroussel images={residential} />
                        </DivBlock>
                    </Div>
                </ContainerProjects>
            </Parallax>
        </>
    )
}

export default Design