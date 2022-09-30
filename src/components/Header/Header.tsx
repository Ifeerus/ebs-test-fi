import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <Link className="links" to="/">
        Home
      </Link>
      <span> | </span>
      <Link className="links" to="cart">
        Cart
      </Link>
    </nav>
  );
}
export default Header;
