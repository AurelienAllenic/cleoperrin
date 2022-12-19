import React from 'react'
import "./nav.css"
import { useState } from "react"
import { Link } from "react-scroll"

function Navbar() {

    const [showLinks, setShowlinks] = useState(false)

    const handleShowLinks = () => {
        setShowlinks(!showLinks)
    }
    return (
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <Link className='navbar_logo' to='about' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Cléo Perrin</Link>
            <ul className='navbar_links'>
                <li className='navbar_item slideInDown-1'>
                    <Link className='navbar_link' to='home' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Accueil</Link>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <Link className='navbar_link' to='about' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>A Propos</Link>
                </li>
                <li className='navbar_item slideInDown-3'>
                    <Link className='navbar_link' to='design' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Design</Link>
                </li>
                <li className='navbar_item slideInDown-4'>
                    <Link className='navbar_link' to='space' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Espaces Publics</Link>
                </li>
                <li className='navbar_item slideInDown-5'>
                    <Link className='navbar_link' to='residential' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Résidentiel</Link>
                </li>
                <li className='navbar_item slideInDown-6'>
                    <Link className='navbar_link' to='contact' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Contact</Link>
                </li>
            </ul>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className='burger-bar'></span>
            </button>
        </div>
    )
}

export default Navbar
