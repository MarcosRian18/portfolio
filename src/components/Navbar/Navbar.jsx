import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h2>M <span className='red'>R</span></h2>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`menu-navbar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
