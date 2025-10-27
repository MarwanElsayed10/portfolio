import "./footer.css"
import Links from "../SocialLinks"
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
// icons
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs"
import { FaFacebookMessenger } from "react-icons/fa";



export default function Footer(){

    return (
        <footer>
            <a href="#" className="footer_logo">Marwan Elsayed</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <Tooltip title="Facebook Account" arrow slots={{transition: Zoom }}>
                    <a href={Links.faceBookUrl} target="_blank"><FaFacebookF/></a>
                </Tooltip>
                <Tooltip title="Messenger Account" arrow slots={{transition: Zoom }}>
                <a href={Links.messengerUrl} target="_blank"><FaFacebookMessenger/></a>
                </Tooltip>
                <Tooltip title="Instagram Account" arrow slots={{transition: Zoom }}>
                <a href={Links.instagramUrl} target="_blank"><FaInstagram/></a>
                </Tooltip>
                <Tooltip title="Telegram Account" arrow slots={{transition: Zoom }}>
                <a href={Links.telegramUrl} target="_blank"><FaTelegram/></a>
                </Tooltip>
                <Tooltip title="LinkedIn Account" arrow slots={{transition: Zoom }}>
                <a href={Links.linkedInUrl} target="_blank"><FaLinkedin/></a>
                </Tooltip>
                <Tooltip title="Whatsapp Account" arrow slots={{transition: Zoom }}>
                <a href={Links.whatsappUrl} target="_blank"><BsWhatsapp/></a>
                </Tooltip>
            </div>

            <div className="footer_copyright">
                <small>&copy; <a href="#">Marwan Elsayed</a> All rights reserved</small>
            </div>
        </footer>
    )
}