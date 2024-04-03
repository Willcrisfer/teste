import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/SwitchTheme";
import scrollToTop from "../../components/scrollToTop/ScrollToTop";
import menu from "../../assets/header/menu.svg";
import logo from "../../assets/header/logo.png";
import "./header.css";
import SwitchBurguer from "../../context/MenuBurguer";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [known, setKnown] = useState(true);
    
      
    return (
        <nav className="header">
            <div className="header__content max-width mb-0">
                <NavLink to="/">
                    <img src={logo} className="header__logo" onClick={scrollToTop} alt="Willian Fernandes" />
                </NavLink>

                <ul className="header__links">
                    <li>
                        <NavLink to="/" onClick={scrollToTop} >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" onClick={scrollToTop} >Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Skills"onClick={scrollToTop}>Habilidades</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Projects"onClick={scrollToTop}>Projetos</NavLink>
                    </li>
                    <li>
                        <a href="#footer">Contato</a>
                    </li>
                    
                </ul>

                <button
                    className="btn__theme"
                    onClick={() => {setTheme(theme === "light" ? "dark" : "light");setKnown(!known);}}
                >
                    {known ? "Light" : "Dark"}
                </button>

                <SwitchBurguer  />
                
            </div>
        </nav>
    );
};

export default Header;
