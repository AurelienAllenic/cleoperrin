import React from 'react'
import "../style/carousel.css"
import { useState, useEffect } from "react"

function Caroussel({ images }) {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 3000)
    })

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div className='carousel'>
            <div className='carousel_wrapper'>
                {images.map((image, index) => {
                    return (
                        <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
                            <img className='card_image' src={image.image} alt="" />
                        </div>
                    )
                })}
                <div className="carousel_pagination">
                    {images.map((_, index) => {
                        return (
                            <div key={index} className={index == current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
                                onClick={() =>
                                    setCurrent(index)
                                }
                            ></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Caroussel