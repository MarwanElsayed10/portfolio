import { useRef } from 'react';
import "./contact.css"
import Links from "../SocialLinks"
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
// icons
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { LuMessageCircle } from "react-icons/lu"
// emailJS
import emailjs from '@emailjs/browser';

const ContactData =[
    {
        id:1,
        icon:<MdOutlineEmail/>,
        title:"Gmail",
        info:"marawanelsaid12@gmail.com",
        link: Links.gmailUrl,
    },
    {
        id:2,
        icon:<RiMessengerLine/>,
        title:"Messenger",
        info:"Marwan Elsayed",
        link:Links.messengerUrl,
        // -=================================================================
    },
    {
        id:3,
        icon:<BsWhatsapp/>,
        title:"Whatsapp",
        info:"01201438314",
        link:Links.whatsappUrl,
    },
];
export default function Contact(){
    const form = useRef();
    
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs
        .sendForm('service_a84ifxe', 'template_5o8vfgp', form.current, 'xqDVVEXmt3zye-2Wv',)
        e.target.reset();
    }
    return (
        <section className="contact" id="contact" data-aos="zoom-out-up">
            <div className="top_section">
                <h5>Get In Touch</h5>
                <h2>CONTACT</h2>
            </div>

            <div className="container contact_container">
                <div className="contact_options">
                    {ContactData.map(contact => {
                        return <article key={contact.id} className="contact_option">
                            {contact.icon}
                            <h4>{contact.title}</h4>
                            <h5>{contact.info}</h5>
                            <a href={contact.link} target="_blank"><LuMessageCircle style={{fontSize: "16px", verticalAlign: "text-top"}}/> Send Message</a>
                        </article>
                    })}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <h4>Let’s connect! Send me an email and I’ll get back to you shortly :</h4>
                    <Tooltip title="Your name will be sent in the message" placement="top" arrow slots={{transition: Zoom }}>
                        <input type="text" placeholder="ًWrite your full name here:" name="name"/>
                    </Tooltip>
                    <Tooltip title="Your email will be sent in the message" placement="top" arrow slots={{transition: Zoom }}>
                        <input type="email" placeholder="Write Your email here:" name="email"/>
                    </Tooltip>
                    <textarea rows={13} name="message" id="" placeholder="Enter Your message here:"></textarea>
                    <Tooltip title="Your email will be sent To my Gmail Account" arrow slots={{transition: Zoom }}>
                        <button className="btn btn-primary">
                            <LuMessageCircle/> Send Message
                        </button>
                    </Tooltip>
                </form>
            </div>
        </section>
    )
}