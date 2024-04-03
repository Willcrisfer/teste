import React, { useState, useEffect } from 'react';
import burguerimg from '../assets/header/menu.svg';
import scrollToTop from '../components/scrollToTop/ScrollToTop';
import { NavLink } from 'react-router-dom';

const SwitchBurguer = () => {
  const [burguer, setBurguer] = useState("header__mobile");

  useEffect(() => {
    // Adicione a classe ao corpo do documento
    document.body.classList.add(burguer);

    // Remova a classe anteriormente adicionada ao corpo do documento
    return () => {
      document.body.classList.remove('header__mobile', 'mobile__links', 'active');
    };
  }, [burguer]);

  const toggleClass = () => {
    // Alterne entre as classes "header__mobile" e "header__mobile active"
    if (burguer === 'header__mobile') {
      setBurguer('header__mobile.active');
    } else {
      setBurguer('header__mobile');
    }
  };

  return (
    <div className={burguer}>
      {/* Adicione a classe "active" se o estado "active" for verdadeiro */}
       
        <img src={burguerimg} className='burguer' onClick={toggleClass} alt="" />
      
      <ul className="mobile__links">
        <li>
          <NavLink to="/" onClick={scrollToTop}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={scrollToTop}>Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/Skills" onClick={scrollToTop}>Habilidades</NavLink>
        </li>
        <li>
          <NavLink to="/Projects" onClick={scrollToTop}>Projetos</NavLink>
        </li>
        <li>
          <a href="#footer">Contato</a>
        </li>
      </ul>
    </div>
  );
};

export default SwitchBurguer;
