import React from 'react'
import { Parallax } from 'react-parallax';
import AboutIMG from "../assets/about.jpg"
import { BorderWhite, Div, Ul, Li, TitleAbout, DateAbout, PlaceAbout, CursusAbout, DateAndIndication, Date, Indication, SecondIndication } from "../style/About"

function About() {
    return (
        <>
            <section id="about">

                <Parallax className='img' bgImage={AboutIMG} strength={800}>
                    <Div>
                        <Ul>
                            <Li><BorderWhite>
                                <TitleAbout>Formations</TitleAbout>
                                <DateAbout>2019-2018</DateAbout>
                                <PlaceAbout>Ecole Camondo, Paris</PlaceAbout>
                                <CursusAbout>Double cursus Architecte intérieur et Design</CursusAbout>
                                <DateAbout>2016-2019</DateAbout>
                                <PlaceAbout>Lycée maximilien Vox, Paris</PlaceAbout>
                                <CursusAbout>Baccalauréat STD2A avec mention</CursusAbout></BorderWhite>
                            </Li>
                        </Ul>
                        <Ul>
                            <Li><BorderWhite>
                                <TitleAbout>Expériences</TitleAbout>
                                <DateAndIndication>
                                    <Date>2019 - </Date><Indication>LIAGRES : stage d'observation</Indication>
                                </DateAndIndication>
                                <DateAndIndication>
                                    <Date>2021 - </Date><Indication>Rudy Ricciotti : stage suivi de chantier</Indication>
                                </DateAndIndication>
                                <DateAndIndication>
                                    <Date>2022 - </Date><Indication>Inidia Mahdavi : stage de deux mois en agence</Indication>
                                </DateAndIndication>
                                <DateAndIndication>
                                    <Date>2021-2023 - </Date><Indication>Angélique Omoré : assistance architecte d'intérieur</Indication>
                                </DateAndIndication>
                            </BorderWhite>
                            </Li>
                        </Ul>
                        <Ul>
                            <Li><BorderWhite>
                                <TitleAbout>Formations</TitleAbout>
                                <DateAbout>2019-2018</DateAbout>
                                <PlaceAbout>Ecole Camondo, Paris</PlaceAbout>
                                <CursusAbout>Double cursus Architecte intérieur et Design</CursusAbout>
                                <DateAbout>2016-2019</DateAbout>
                                <PlaceAbout>Lycée maximilien Vox, Paris</PlaceAbout>
                                <CursusAbout>Baccalauréat STD2A avec mention</CursusAbout></BorderWhite>
                            </Li>
                        </Ul>
                    </Div>
                </Parallax>
            </section>
        </>
    )
}

export default About