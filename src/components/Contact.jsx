import React from 'react'
import { Parallax } from 'react-parallax';
import ContactIMG from "../assets/contact.jpg"

function Contact() {
    return (
        <>
            <section id="contact">
                <Parallax className='img' bgImage={ContactIMG} strength={800}>
                </Parallax>
            </section>
        </>
    )
}

export default Contact