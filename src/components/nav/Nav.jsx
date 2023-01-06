import "./nav.css"
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll"
import Dropdown from './Dropdown';
import { RxTriangleDown } from "react-icons/rx"

function Navbar() {
    const [scrollTop, setScrollTop] = useState(0);
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)

    }
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const [showLinks, setShowlinks] = useState(false)

    const handleShowLinks = () => {
        setShowlinks(!showLinks)
    }
    return (
        <>
            <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <Link className='navbar_logo' to='home' spy={true} smooth={true} offset={0} duration={500}>Cléo Perrin</Link>
                <ul className='navbar_links'>
                    <li className='navbar_link'>
                        <Link className='navbar_link' to='home' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Accueil</Link>
                    </li>
                    <li className='navbar_link'>
                        <Link className='navbar_link' to='about' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>A Propos</Link>
                    </li>
                    <li className='navbar_link' onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link to='portfolio' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks} >Portfolio<RxTriangleDown className="triangledown" /></Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='navbar_link'>
                        <Link to='contact' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Contact</Link>
                    </li>
                </ul>
                <button className='navbar_burger' onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>
            </div>
        </>
    )
}

export default Navbar

