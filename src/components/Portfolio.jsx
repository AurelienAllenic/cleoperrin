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
                            <P>Situé à quelques minutes de la Mairie de Suresnes, le bâtiment administratif  3 rue du Mont Valérien accueille chaque jour citoyens et agents de la mairie.<br /> Le projet repose sur trois grands axes : la monumentalité, la mise en valeur de l’identité du bâtiment, et une circulation induite par la structure existante.<br />
                                L’enjeu d’un espace d’accueil dédié à l’administration en France est de représenter les valeurs patriotiques françaises en constituant un projet
                                monumental, grandiose, qui appelle le public vers l’intérieur du bâtiment.<br /> Un nouvel escalier a donc été dessiné, afin de proposer un flux principal dans la verticalité du bâtiment allant du rez -de -jardin au premier étage. <br />Le projet met également en valeur un savoir-faire unique : le décor peint, moins coûteux et plus écologique que l’usage du vrai marbre.
                            </P>
                            <Caroussel images={suresnes} />
                            <SpanLocation id='residential'></SpanLocation>
                        </DivBlock>
                        <DivBlock>
                            <MainTitleSectionPortfolio>Résidentiel</MainTitleSectionPortfolio>
                            <H1>Recouvrement</H1>
                            <P>Par la superposition de matériaux,
                                couleurs et principes constructifs habituellement utilisés en façade, les nouveaux espaces créés s’intégreront à l'identité de l’existant tout en créant un contraste entre structure apparente et dissimulée. <br />Le projet Recouvrement est une rupture entre identité industrielle et contemporaine.<br />Le restaurant est pensé de sorte à offrir une nouvelle observation des événements desChaudronneries de Montreuil, par des dispositif translucides, tel que le textile ou la tôle perforée. </P>
                            <Caroussel images={residential} />
                        </DivBlock>
                    </Div>
                </ContainerProjects>
            </Parallax>
        </>
    )
}

export default Design