import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <h1>Math Magician</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quotes">Quote</Link>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
