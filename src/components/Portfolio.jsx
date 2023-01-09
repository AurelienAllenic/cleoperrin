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
                            <H1>VENTI - MOBILIER ROTOMOULABLE</H1>
                            <Caroussel images={venti} />
                        </DivBlock>
                        <DivBlock>
                            <H1>SCALABLE NATURE</H1>
                            <Caroussel images={scalables} />
                        </DivBlock>
                        <DivBlock>
                            <H1>PRISMA - la lampe 3 en 1</H1>
                            <Caroussel images={prisma} />
                        </DivBlock>
                        <DivBlock>
                            <H1>DESIGN ET INTELLIGENCE ARTIFICIELLE</H1>
                            <Caroussel images={artificial} />
                        </DivBlock>
                        <SpanLocation2 id='space'></SpanLocation2>
                        <DivBlock>
                            <MainTitleSectionPortfolio>Espaces Publics</MainTitleSectionPortfolio>
                            <H1>La Mairie de Suresnes - guichet unique et
                                espace d’accueil</H1>
                            <Caroussel images={suresnes} />
                            <SpanLocation id='residential'></SpanLocation>
                        </DivBlock>
                        <DivBlock>
                            <MainTitleSectionPortfolio>Résidentiel</MainTitleSectionPortfolio>
                            <H1>Recouvrement</H1>
                            <Caroussel images={residential} />
                        </DivBlock>
                    </Div>
                </ContainerProjects>
            </Parallax>
        </>
    )
}

export default Design