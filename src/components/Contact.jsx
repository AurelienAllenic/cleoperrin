import React from 'react'
import { Parallax } from 'react-parallax';
import { useRef } from 'react'
import ContactIMG from "../assets/contact.jpg"
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, InputDiv, Input, Textarea, Button } from "../style/Contact"
import { MainTitleSection } from "../style/General"

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ohqoijk', 'template_w9q6vir', form.current, 'dWzWUkYBQ9ERFSUxC')

        e.target.reset();
        toast.success('Message envoyé !', {
            className: "toast-message"
        })

    };

    return (
        <>
            <section id="contact">
                <Parallax className='img' bgImage={ContactIMG} strength={800}>
                    <ToastContainer />
                    <MainTitleSection>Contact</MainTitleSection>
                    <Form ref={form} onSubmit={sendEmail}>
                        <InputDiv>
                            <Input id='name' type="text" name='name' placeholder='Nom / Prénom' required />
                            <Input id='email' type="email" name='email' placeholder='email' required />
                        </InputDiv>
                        <Textarea id='textarea' name="message" placeholder='Message' rows="7" required></Textarea>
                        <Button type='submit' className='btn btn-primary'>Envoyer</Button>
                    </Form>
                </Parallax>
            </section>
        </>
    )
}

export default Contact