import Axios from 'axios';
import React from 'react';

// Funcion para agregarle lógica a nuestro formulario y haga la petición al servidor donde
//  se está mandando la información
const authentication = event => {
  // console.log(event)
  // funcion para prevenir que el formulario cargue por defecto
  event.preventDefault();

  const form = event.target;
  // console.log(form)
  // console.log(form.password.value)

  const data = {
    "email": form.email.value,
    "password": form.password.value
  }

  // Haciendo peticion al servidor
  Axios.post(`${process.env.REACT_APP_API_USER}/login`, data)
  .then(r => {
    // console.log(r)
    // Guardando en el localStorage
    localStorage.setItem('token', r.data.token)
    window.location = "/"
  })
  .catch(e => console.log(e))
}


const Login = () => {
  return (
    <div className='ed-grid'>
      <div className='l-block'></div>
      <div className='m-to-center m-60 lg-40'>
        <h1 className='center'>Iniciar sesión</h1>

        <form onSubmit={authentication.bind()}>
          <div className='form__item'>
            <label htmlFor="email">
              Correo electrónico
              <input type="email" name='email' id='email' placeholder='Ingrese su email' required />
            </label>
          </div>

          <div className='form__item'>
            <label htmlFor="password">
              Contraseña
              <input type="password" name='password' id='password' placeholder='Ingrese su contraseña' required />
            </label>
          </div>

          <div className="form_item s-cross-center s-main-center">
            <input type="submit" className='button full' value="Iniciar Sesión" />
          </div>
          
        </form>

        <div className="center">
          <p>¿No tienes cuenta de usuario?
            <a href="/registro"> Crear cuenta</a>
          </p> 
        </div>
      </div>
    </div>
  )
}

export default Login
