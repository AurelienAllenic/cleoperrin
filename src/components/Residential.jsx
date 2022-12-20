import React from 'react'
import { Parallax } from 'react-parallax';
import ResidentialIMG from "../assets/residential.jpg"
import { Div, H1, P, DivBlock } from "../style/Portfolio"
import Caroussel from './Caroussel';
import { general } from './Data';
import { MainTitle } from "../style/General"

function Residential() {
    return (
        <>
            <section id="residential">
                <Parallax className='img-residential' bgImage={ResidentialIMG} strength={800}>
                    <MainTitle>Résidentiel</MainTitle>
                    <Div>
                        <DivBlock>
                            <H1>PROJET 1</H1>
                            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam expedita earum, corporis autem tempore consequatur, omnis distinctio ex vero, nobis error! Similique iste beatae quis rem mollitia quas id sed!</P>
                            <Caroussel images={general} />
                        </DivBlock>
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default Residential