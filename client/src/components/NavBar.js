import { Link } from "react-scroll"
import { AiOutlineCompass } from "react-icons/ai";
// import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../components/img/dog-logo-1.png"
import compass from "../components/img/compass.png"

export default function NavBar({ navVisible, setNavVisible }) {

    //  Conditionally rendering the <div>
    //  Rendering fade-in effect based on Conditional
    //  Conditional unmounts div before fade-out

    return <div id='navbar'>
        <img src={logo} id='logo' />
        <div className="spacer"></div>
        <div id='nav-btns' className={navVisible ? "fade-in" : "fade-out"}>
            {navVisible ?
                <ul >
                    <li>
                        <Link to="about-home" spy={true} smooth={true} offset={50} duration={700}>About</Link>
                    </li>
                    <li>
                        <Link to="fosters-home" spy={true} smooth={true} offset={50} duration={700}>Fosters</Link>
                    </li>
                    <li>
                        <Link to="training-home" spy={true} smooth={true} offset={50} duration={700}>Training</Link>
                    </li>
                    <li>
                        <Link to="contact-home" spy={true} smooth={true} offset={50} duration={700}>Contact</Link>
                    </li>
                </ul >
                : null}
        </div >
        <div id="nav-btns"><img src={compass} id="compass" className={navVisible ? "toggle-for" : "toggle-bac"} onClick={() => setNavVisible(!navVisible)} /></div>
    </div >
}