import React from 'react'
import { Parallax } from 'react-parallax';
import PortfolioIMG from "../assets/test.jpg"
import { Div, H1, P, DivBlock, ContainerProjects } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { scalables, venti, prisma, suresnes, residential, artificial } from './Data';
import { MainTitleSection, SpanLocation, SpanLocation2 } from "../style/General"
import "../index.css"

function Design() {
    return (
        <>
            <SpanLocation id='design'></SpanLocation>
            <Parallax className='img-portfolio' bgImage={PortfolioIMG} strength={1500}>
                <ContainerProjects>
                    <Div>
                        <DivBlock>
                            <MainTitleSection>Design</MainTitleSection>
                            <H1>VENTI - MOBILIER ROTOMOULABLE</H1>
                            <P>Venti réinterprète l’ADN formel de
                                mobiliers de design connus de tous.<br />
                                Ce projet est finalement un hommage à Eames, Paulin, Noguchi, apportant à leurs objets iconiques, une
                                nouvelle dimension.<br />L’ensemble de mobilier ouvre une porte vers un nouvel univers formel ; flottant,
                                imprévisible, libre,
                                proposant plus qu’un objet figé dans le temps, mais une atmosphère légère et
                                dispersible au plus grand nombre.</P>
                            <Caroussel images={venti} />
                        </DivBlock>
                        <DivBlock>
                            <H1>SCALABLE NATURE</H1>
                            <P>modules en tôle perforée
                                Inspiré par l’univers de la faune et de la flore,
                                Scalable Nature est un kit de
                                modules qui peuvent être simplement assemblés  entre eux.
                                Transformez votre intérieur et vos
                                objets du quotidien en leur donnant un aspect coloré et organique. </P>
                            <Caroussel images={scalables} />
                        </DivBlock>
                        <DivBlock>
                            <H1>PRISMA - la lampe 3 en 1</H1>
                            <P>Prisma est une lampe modulable, et 3 en 1 pensée pour s’adapter à différents contextes.<br />
                                Combiner la lampe de travail, la lampe de chevet et la lampe décorative en une.<br />
                                La lampe s’adapte à trois situations principales, se reposer, habiller / embellir l’espace mais aussi travailler.<br />
                                Le projet se base sur la technique du DIY (Do It Yourself) et à donc été pensé pour que l’utilisateur
                                assemble les différents composants de Prisma, avec des matériaux abordables et à bas coûts.</P>
                            <Caroussel images={prisma} />
                        </DivBlock>
                        <DivBlock>
                            <H1>DESIGN ET INTELLIGENCE ARTIFICIELLE</H1>
                            <P>Projet exposé lors de la foire d’art contemporain de Strasbourg ST’ART 2022.<br />
                                Ce projet explore la relation entre création et intelligence artificielle.
                                Conçu par plusieurs IA.<br />
                                Les visuels générés à la manière de différents designers  représentent une série de 42 objets novateurs. Le jeu de société se joue à la manière d’un jeu de 7 familles, accessible à tous permettant de se familiariser et d’appréhender les identités distinctes des 7
                                créateurs les plus influents.</P>
                            <Caroussel images={artificial} />
                        </DivBlock>
                        <SpanLocation2 id='space'></SpanLocation2>
                        <DivBlock>
                            <MainTitleSection>Espaces Publics</MainTitleSection>
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
                            <MainTitleSection>Résidentiel</MainTitleSection>
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