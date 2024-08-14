import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h2>M <span className='red'>R</span></h2>
        </div>

        <nav className="menu-navbar">
            <ul>
               <li>Inicio</li>
               <li>Projetos</li>
               <li>Habilidades</li>
               <li>Contato</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar