import React from "react";
import {useState} from "react"
import "./nav.css"
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
// Icons
import {IoHomeOutline} from "react-icons/io5"
import {LuUserRound} from "react-icons/lu"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"

export default function Nav(){
    const[activeNav , setActiveNav] = useState('#')
    return (
        <nav>
            <Tooltip title="Home" arrow  placement="top" slots={{transition: Zoom }}>
                <a className={activeNav === "#" ? "active" : ""} href="#" onClick={() => {
                    setActiveNav("#")
                }}><IoHomeOutline/></a>
            </Tooltip>
            <Tooltip title="About" arrow  placement="top" slots={{transition: Zoom }}>
                <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => {
                    setActiveNav("#about")
                }}><LuUserRound/></a>
            </Tooltip>
            <Tooltip title="Services" arrow placement="top" slots={{transition: Zoom }}>
                <a href="#services"  className={activeNav === "#services" ? "active" : ""} onClick={() => {
                    setActiveNav("#services")
                }} ><BiBook/></a>
            </Tooltip>
            <Tooltip title="Projects" arrow placement="top" slots={{transition: Zoom }}>
                <a href="#projects"  className={activeNav === "#projects" ? "active" : ""} onClick={() => {
                    setActiveNav("#projects")
                }}><RiServiceLine/></a>
            </Tooltip>
            <Tooltip title="Contact me" arrow placement="top" slots={{transition: Zoom }}>
                <a href="#contact"  className={activeNav === "#contact" ? "active" : ""} onClick={() => {
                    setActiveNav("#contact")
                }} ><BiMessageSquareDetail/></a>
            </Tooltip>
        </nav>
    )
}