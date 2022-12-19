import React from 'react'
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"
import { CiMail } from "react-icons/ci"
import { Footer, Icons, SpanIcon } from "../style/Contact"

function FooterContact() {
    return (
        <>
            <Footer>
                <Icons>
                    <SpanIcon href="https://www.linkedin.com/in/cléo-perrin-b3478b244/" target="_blank"><AiFillLinkedin /></SpanIcon>
                    <SpanIcon href="mailto:cleoperrin.archi@gmail.com" target="_blank"><CiMail /></SpanIcon>
                    <SpanIcon href="https://www.instagram.com/cleo_perrin/?hl=fr" target="_blank"><AiOutlineInstagram /></SpanIcon>
                </Icons>
            </Footer>
        </>
    )
}

export default FooterContact