import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar } from '../../styles/GeralStyles';

const Menu = () => {
  const logout = () => {
    window.open('/login', '_self');
  };

  if (useLocation().pathname !== '/login') {
    return (
      <Navbar>
        <li>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link to={'/contato'}>Contato</Link>
        </li>
        <li>
          <Link to={'/sobre'}>Sobre</Link>
        </li>
        <li>
          <a href="#" onClick={logout}>
            Sair
          </a>
        </li>
      </Navbar>
    );
  } else {
    return <div></div>
  }

};

export default Menu;
