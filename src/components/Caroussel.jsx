import React from 'react'
import "../style/carousel.css"
import { useState, useEffect } from "react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import { SpanIconLeft, SpanIconRight } from '../style/General'

function Caroussel({ images }) {
    const [current, setCurrent] = useState(0)

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div className='carousel_container'>
            <div className='carousel'>
                <div className='carousel_wrapper'>
                    {images.map((image, index) => {
                        return (
                            <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
                                <img className='card_image' onClick={slideRight} src={image.image} alt="" />
                                <div className='card-overlay'>
                                    <div>
                                        <p className='card_content'>{image.content}</p>
                                    </div>
                                    <MdArrowBackIos className='carousel_arrow_left' onClick={slideLeft} />
                                    <span className='carousel_arrow_right' onClick={slideRight}><MdArrowForwardIos /></span>

                                </div>
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
        </div>
    )
}

export default Caroussel