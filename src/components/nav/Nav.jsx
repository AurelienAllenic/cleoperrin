import "./nav.css"
import './Dropdown.css';
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll"
import { RxTriangleDown } from "react-icons/rx"
import { MenuItems } from './MenuItems';


function Navbar() {
    const [scrollTop, setScrollTop] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)

    }

    const closeBoth = () => {
        if (click === false) {
            setDropdown(true);
            setShowlinks(true);
            setClick(false);
            console.log(click)
        }
        else {
            setDropdown(false);
            setShowlinks(false);
            setClick(true);
            console.log(click)
        }
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
                <div className="grid-test">
                    <Link className='navbar_logo' to='home' spy={true} smooth={true} offset={0} duration={1500}>Cléo Perrin</Link>
                    <ul className='navbar_links'>
                        <li className='navbar_link'>
                            <Link to='home' spy={true} smooth={true} offset={0} duration={1500} onClick={handleShowLinks}>Accueil</Link>
                        </li>
                        <li className='navbar_link'>
                            <Link to='about' spy={true} smooth={true} offset={0} duration={1500} onClick={handleShowLinks}>A Propos</Link>
                        </li>
                        <li className='navbar_link' onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave} onClick={closeBoth} >
                            Portfolio<RxTriangleDown className="triangledown" />
                            {dropdown &&
                                <ul
                                    onClick={handleClick}
                                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
                                >
                                    {MenuItems.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    className={item.cName}
                                                    to={item.path}
                                                    spy={true} smooth={true} offset={0} duration={1500} onClick={handleShowLinks}
                                                >
                                                    <span onClick={closeBoth}>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>}
                        </li>
                        <li className='navbar_link'>
                            <Link to='contact' spy={true} smooth={true} offset={0} duration={1500} onClick={handleShowLinks}>Contact</Link>
                        </li>
                    </ul>
                    <button className='navbar_burger' onClick={handleShowLinks}>
                        <span className='burger-bar'></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar

