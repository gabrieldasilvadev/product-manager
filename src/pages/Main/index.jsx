import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>I am main page!</h1>
        <Link to="/detalhes">Detalhes</Link>
      </div>
    );
  }
}
