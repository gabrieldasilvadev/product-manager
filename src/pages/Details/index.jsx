import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Details extends React.Component {
  render() {
    return (
      <div className="details">
        <h1>I am details page!</h1>
        <Link to="/">Voltar para a pagina principal</Link>
      </div>
    );
  }
}
