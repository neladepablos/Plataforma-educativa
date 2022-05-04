import React, { createRef } from 'react';
// import { Link } from 'react-router-dom';
import EDlogo from '../../images/escomath2.png';

// Creando una referencia
const menu = createRef();
const toggleMenu = () => menu.current.classList.toggle('show');

const removeToken = () => {
  localStorage.removeItem('token')
  window.location = "/login"
}


const Header = () => {
  return (
    <header className='main-header'>
      <div className='ed-grid s-grid-5 lg-grid-4'>
        <div className='s-cols-4 lg-cols-1 s-cross-center'>
          <a href="/">
            <img 
              src={EDlogo} 
              alt="EDlogo" 
              className='main-logo'
            />
            
          </a>          
        </div>

        <div className='s-cols-1 lg-cols-3 s-cross-center s-main-end'>
          <nav className='main-menu' ref={menu}>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/especialidades">Especialidades</a></li>
              <li><a href="/cursos">Cursos</a></li>
              <li><a href="/profesores">Profesores</a></li>
              <li><span style={{cursor: "pointer"}} onClick={() => removeToken()}>Cerrar Sesión</span></li>
            </ul>
          </nav>

          {/* Menu hamburguesa */}
          <div 
            className='main-menu-toggle to-l'
            onClick={() => toggleMenu()}
          >          
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header
