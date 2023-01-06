import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-scroll';

function Dropdown() {
  const [showLinks, setShowlinks] = useState(false)

    const handleShowLinks = () => {
        setShowlinks(!showLinks)
    }
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
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
                spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;