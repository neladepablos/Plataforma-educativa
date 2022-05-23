import React from 'react';

const removeToken = () => {
  localStorage.removeItem('token')
  window.location = "/login"
}

const PrivateMenu = () => {
  return (    
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/especialidades">Especialidades</a></li>
        <li><a href="/cursos">Cursos</a></li>
        <li><a href="/profesores">Profesores</a></li>
        <li><span style={{cursor: "pointer"}} onClick={() => removeToken()}>Cerrar Sesión</span></li>
      </ul>
   
  )
}

export default PrivateMenu
