import React from 'react'
import { Parallax } from 'react-parallax';
import SpaceIMG from "../assets/space.jpg"
import { Div, H1, P, DivBlock } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { suresnes } from './Data';
import { MainTitle } from "../style/General"

function Space() {
    return (
        <>
            <section id="space">
                <Parallax className='img-portfolio-space' bgImage={SpaceIMG} strength={800}>
                    <MainTitle>Espaces Publics</MainTitle>
                    <Div>
                        <DivBlock>
                            <H1>La Mairie de Suresnes - guichet unique et
                                espace d’accueil</H1>
                            <P>Situé à quelques minutes de la Mairie de Suresnes, le bâtiment administratif  3 rue du Mont Valérien accueille chaque jour citoyens et agents de la mairie. Le projet repose sur trois grands axes : la monumentalité, la mise en valeur de l’identité du bâtiment, et une circulation induite par la structure existante.
                                L’enjeu d’un espace d’accueil dédié à l’administration en France est de représenter les valeurs patriotiques françaises en constituant un projet
                                monumental, grandiose, qui appelle le public vers l’intérieur du bâtiment. Un nouvel escalier a donc été dessiné, afin de proposer un flux principal dans la verticalité du bâtiment allant du rez -de -jardin au premier étage. Le projet met également en valeur un savoir-faire unique : le décor peint, moins coûteux et plus écologique que l’usage du vrai marbre.
                            </P>
                            <Caroussel images={suresnes} />
                        </DivBlock>
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default Space