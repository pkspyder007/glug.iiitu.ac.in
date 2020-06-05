import {Link} from 'gatsby';
import React from 'react';
import '../assets/css/nav.css';

export default function Navbar(): JSX.Element {
  return (
    <nav className="container">
      <div className="logo">
        <Link to="/">
          <img src={require('../assets/img/glugiiitu.png')} alt="GLUG IIITU LOGO" />
        </Link>
      </div>
      <strong>Indian Institute of Information Technology Una</strong>
      <div className="nav-links">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
      </div>
    </nav>
  );
}
