import React from 'react'
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"
import { Footer, PhoneNumber, Icons, SpanIcon } from "../style/Contact"

function FooterContact() {
    return (
        <>
            <Footer>
                <PhoneNumber href="tel:+33-69-52-79-99-3">+33 695279993</PhoneNumber>
                <Icons>
                    <SpanIcon href="https://www.linkedin.com/in/cléo-perrin-b3478b244/" target="_blank"><AiFillLinkedin /></SpanIcon>
                    <SpanIcon href="https://www.instagram.com/cleo_perrin/?hl=fr" target="_blank"><AiOutlineInstagram /></SpanIcon>
                </Icons>
            </Footer>
        </>
    )
}

export default FooterContact