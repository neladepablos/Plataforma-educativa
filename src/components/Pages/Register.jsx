import Axios from 'axios';
import React from 'react';

const registration = (event) => {
  event.preventDefault();

  const form = event.target;

  // Data que vamos a mandar a nuestro servidor
  const data = {
    "email": form.email.value,
    "name": form.fullname.value,
    "password": form.password.value
  }

  Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
  .then(() => {
    alert('Usuario creado')
    window.location = "/login"
  })
  .catch(() => alert('Error al crear usuario'))
}

const Register = () => {
  return (
    <div className='ed-grid'>
    <div className='l-block'></div>
    <div className='m-to-center m-60 lg-40'>
      <h1 className='center'>Crear cuenta</h1>

      <form onSubmit={registration.bind()}>
        <div className='form__item'>
          <label htmlFor="fullname">
            Nombre completo
            <input type="text" name='fullname' id='fullname' placeholder='Ingrese su nombre' required />
          </label>
        </div>

        <div className='form__item'>
          <label htmlFor="email">
            Correo electrónico
            <input type="email" name='email' id='email' placeholder='Ingrese su e-mail' required />
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
          <p>¿Ya tienes cuenta de usuario?
            <a href="/login"> Iniciar sesión</a>
          </p> 
        </div>
    </div>
  </div>
  )
}

export default Register
