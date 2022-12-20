import React from 'react'
import { Parallax } from 'react-parallax';
import PortfolioIMG from "../assets/test.jpg"
import { Div, H1, P, DivBlock } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { scalables, venti, prisma, suresnes, general } from './Data';
import { SpanLocation } from "../style/General"

function Design() {
    return (
        <>
            <SpanLocation id='design'></SpanLocation>
            <Parallax className='img-portfolio' bgImage={PortfolioIMG} strength={2100}>
                <Div>
                    <DivBlock>
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
                        <H1>Scalable nature</H1>
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
                        <P>Prisma est une lampe modulable, et 3 en 1 pensée pour s’adapter à différents contextes.
                            Combiner la lampe de travail, la lampe de chevet et la lampe décorative en une.
                            La lampe s’adapte à trois situations principales, se reposer, habiller / embellir l’espace mais aussi travailler.
                            Le projet se base sur la technique du DIY (Do It Yourself) et à donc été pensé pour que l’utilisateur
                            assemble les différents composants de Prisma, avec des matériaux abordables et à bas coûts.</P>
                        <Caroussel images={prisma} />
                        <SpanLocation id='space'></SpanLocation>
                    </DivBlock>

                    <DivBlock>
                        <H1>La Mairie de Suresnes - guichet unique et
                            espace d’accueil</H1>
                        <P>Situé à quelques minutes de la Mairie de Suresnes, le bâtiment administratif  3 rue du Mont Valérien accueille chaque jour citoyens et agents de la mairie. Le projet repose sur trois grands axes : la monumentalité, la mise en valeur de l’identité du bâtiment, et une circulation induite par la structure existante.
                            L’enjeu d’un espace d’accueil dédié à l’administration en France est de représenter les valeurs patriotiques françaises en constituant un projet
                            monumental, grandiose, qui appelle le public vers l’intérieur du bâtiment. Un nouvel escalier a donc été dessiné, afin de proposer un flux principal dans la verticalité du bâtiment allant du rez -de -jardin au premier étage. Le projet met également en valeur un savoir-faire unique : le décor peint, moins coûteux et plus écologique que l’usage du vrai marbre.
                        </P>
                        <Caroussel images={suresnes} />
                        <SpanLocation id='residential'></SpanLocation>
                    </DivBlock>
                    <DivBlock>
                        <H1>PROJET 1</H1>
                        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam expedita earum, corporis autem tempore consequatur, omnis distinctio ex vero, nobis error! Similique iste beatae quis rem mollitia quas id sed!</P>
                        <Caroussel images={general} />
                    </DivBlock>

                </Div>
            </Parallax>
        </>
    )
}

export default Design