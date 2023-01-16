import { AiOutlineCompass } from "react-icons/ai";
import { useState, useEffect } from "react";
import logo from "../components/img/dog-logo-1.png"

export default function NavBar() {

    const [navVisible, setNavVisible] = useState(false)

    return <div id='navbar'>
        <img src={logo} id='logo' />
        <div className="spacer"></div>
        <div id='nav-btns' className={navVisible ? "fade-in" : "fade-out"}>
            {navVisible ? <ul >
                <li>About</li>
                <li>Fosters</li>
                <li>Training</li>
                <li>Contact</li>
            </ul> : null}
        </div>
        <div id="nav-btns"><AiOutlineCompass id="compass" onClick={() => setNavVisible(!navVisible)} /></div>
    </div >
}