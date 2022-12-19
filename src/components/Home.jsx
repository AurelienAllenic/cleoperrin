import React from 'react'
import "../style/home.css"
import { useState, useEffect } from "react"

function Home({ images }) {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 4000)
    })

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }


    return (
        <section id='home'>
            <div className='carousel-home'>
                <div className='carousel_wrapper-home'>
                    {images.map((image, index) => {
                        return (
                            <div key={index} className={index == current ? "carousel_card-home carousel_card-active-home" : "carousel_card-home"}>
                                <img className='card_image-home' src={image.image} alt="" />
                                <div className='card-overlay-home'>
                                    <h2 className='card_title-home'>{image.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home