import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../styles/GeralStyles';

const Menu = () => {
  const logout = () => {
    alert('Logout');
  };

  return (
    <Navbar>
      <li>
        <Link to={'/'}>Inicio</Link>
      </li>
      <li>
        <Link to={'/conato'}>Conatato</Link>
      </li>
      <li>
        <Link to={'sobre-nos'}>Sobre</Link>
      </li>
      <li>
        <a href="#" onClick={logout}>
          Sair
        </a>
      </li>
    </Navbar>
  );
};

export default Menu;
