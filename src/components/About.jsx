import React from 'react'
import { Parallax } from 'react-parallax';
import AboutIMG from "../assets/about.jpg"
import { CardsContainer, BorderWhite, Div, Ul, Li, TitleAbout, DateAbout, PlaceAbout, CursusAbout, DateAndIndication, Date, Indication, DivFormation } from "../style/About"
import { MainTitle } from "../style/General"
function About() {

    return (
        <>
            <section id="about">

                <Parallax className='img-about' bgImage={AboutIMG} strength={500}>
                    <MainTitle>A Propos</MainTitle>
                    <Div>
                        <CardsContainer>
                            <Ul>
                                <Li><BorderWhite>
                                    <DivFormation>
                                        <TitleAbout>Formations</TitleAbout>
                                        <DateAbout>2019-2018</DateAbout>
                                        <PlaceAbout>Ecole Camondo, Paris</PlaceAbout>
                                        <CursusAbout>Double cursus Architecte intérieur et Design</CursusAbout>
                                        <DateAbout>2016-2019</DateAbout>
                                        <PlaceAbout>Lycée maximilien Vox, Paris</PlaceAbout>
                                        <CursusAbout>Baccalauréat STD2A avec mention</CursusAbout></DivFormation></BorderWhite>
                                </Li>
                            </Ul>
                            <Ul>
                                <Li><BorderWhite>
                                    <TitleAbout>Expériences</TitleAbout>
                                    <DateAndIndication>
                                        <Date>2019 </Date><Indication>LIAGRE : stage d'observation</Indication>
                                    </DateAndIndication>
                                    <DateAndIndication>
                                        <Date>2021</Date><Indication>Rudy Ricciotti : stage suivi de chantier</Indication>
                                    </DateAndIndication>
                                    <DateAndIndication>
                                        <Date>2022</Date><Indication>India Mahdavi : stage de deux mois en agence</Indication>
                                    </DateAndIndication>
                                    <DateAndIndication>
                                        <Date>2021-2023</Date><Indication>Angélique Omoré : assistance architecte d'intérieur</Indication>
                                    </DateAndIndication>
                                </BorderWhite>
                                </Li>
                            </Ul>
                            <Ul>
                                <Li><BorderWhite>
                                    <TitleAbout>Compétences</TitleAbout>
                                    <DateAbout>Archicad</DateAbout>
                                    <DateAbout>Autocad</DateAbout>
                                    <DateAbout>Sketchup</DateAbout>
                                    <DateAbout>Rhino 6</DateAbout>
                                    <DateAbout>Photoshop</DateAbout>
                                    <DateAbout>Illustrator</DateAbout>
                                    <DateAbout>InDesign</DateAbout>
                                    <DateAbout>Lumion</DateAbout>
                                    <DateAbout>Cinema 4D</DateAbout>
                                </BorderWhite>
                                </Li>
                            </Ul>
                        </CardsContainer>
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default About