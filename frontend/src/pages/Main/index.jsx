import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Storage from '../../utils/Storage';
import './index.css';

const Main = () => {

  useEffect(() => {
    let token = Storage.getToken();

    if(!token) {
      window.open('/login', '_self');
    }
  })

  return (
    <div className="main">
      <h1>Pagina principal</h1>
      <Link to="/detalhes">Detalhes</Link>
    </div>
  );
};

export default Main;
