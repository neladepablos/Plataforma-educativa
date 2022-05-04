import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Login from '../Pages/Login';

// Rutas protegidas si mi usuario no está logeado

const Protected = ({ component: Component, ...rest }) => {

  const userLogged = localStorage.getItem('token');

  if ( !userLogged ) {
    // Redirect: Componente para redirigir al usuario a otra página
    return <Redirect to="/login" component={Login} />  
  }
  return <Route {...rest} component={Component} /> 
}

export default Protected;
