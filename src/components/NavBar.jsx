import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
  return (
      <nav>
          <div>
              <h1>Hello Guys</h1>
          </div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/Login">Login</Link></li>
           </ul>
      </nav>
  );
}

export default NavBar;