import React from 'react'
import { Parallax } from 'react-parallax';
import SpaceIMG from "../assets/space.jpg"
import { Div, H1, P, DivBlock } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { venti } from './Data';
import { MainTitle } from "../style/General"

function Space() {
    return (
        <>
            <section id="space">
                <Parallax className='img' bgImage={SpaceIMG} strength={800}>
                    <MainTitle>Espaces Publics</MainTitle>
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
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default Space