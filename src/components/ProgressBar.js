import React, {useState, useEffect} from 'react'
import { BarContainer, Bar } from '../style/ProgressBar';

function ProgressBar() {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)

    }

    useEffect(()=> {
        window.addEventListener("scroll", onScroll)

        return() => window.removeEventListener("scroll", onScroll)
    }, [])

  return (
    <BarContainer>
        <Bar style={{width: `${scrollTop}%`}}></Bar>
    </BarContainer>
  )
}

export default ProgressBar