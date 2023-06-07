import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Math Magicians</h1>
    <ul className="navbar-menu">
      <li className="navbar-item">
        <Link className="navbar-link" to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/calculator">Calculator</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
