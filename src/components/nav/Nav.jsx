import React from 'react'
import { Link } from "react-scroll"
import { EntireNav, Ul, Li } from "../../style/Nav"

function Nav() {
    return (
        <>
            <EntireNav>
                <Ul>
                    <Li><Link to='about' spy={true} smooth={true} offset={0} duration={500}>Cléo Perrin</Link></Li>
                    <Li><Link to='about' spy={true} smooth={true} offset={0} duration={500}>A Propos</Link></Li>
                    <Li><Link to='design' spy={true} smooth={true} offset={0} duration={500}>Design</Link></Li>
                    <Li><Link to='space' spy={true} smooth={true} offset={0} duration={500}>Espaces Publics</Link></Li>
                    <Li><Link to='residential' spy={true} smooth={true} offset={0} duration={500}>Résidentiel</Link></Li>
                    <Li><Link to='contact' spy={true} smooth={true} offset={0} duration={500}>Contact</Link></Li>
                </Ul>
            </EntireNav>
        </>
    )
}

export default Nav