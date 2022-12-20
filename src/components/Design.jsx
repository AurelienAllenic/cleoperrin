import React from 'react'
import { Parallax } from 'react-parallax';
import PortfolioIMG from "../assets/portfolio.jpg"
import { Div, H1, P, DivBlock } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { scalables, venti, prisma } from './Data';
import { MainTitle } from "../style/General"

function Design() {
    return (
        <>
            <section id="design">
                <Parallax className='img-portfolio' bgImage={PortfolioIMG} strength={1200}>
                    <MainTitle>Design</MainTitle>
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
                        </DivBlock>
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default Design