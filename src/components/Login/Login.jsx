import './Login.css';
import React from 'react';

function Login () {
  return (
     <form className="login">
      <h2 className="login__title">Вход</h2>
      <fieldset className="login__fieldset">
        <label className="popup__field">
          <input 
            type="email"  
            name="email" 
            placeholder="Email" 
            className="login__input" 
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            required 
            // onChange={formValues.handleChange}
            // value = {formValues.values.email || ""}
          />
          <span className="popup__item-error"></span>
        </label>
        <label className="popup__field">
          <input 
            type="password"  
            name="password" 
            placeholder="Пароль" 
            className="login__input" 
            required 
            // onChange={formValues.handleChange}
            // value = {formValues.values.password || ""}
            minLength = {3}
          />
          <span className="popup__item-error"></span>
        </label>
      </fieldset>
      <button className="login__button" type="submit" aria-label="Войти" >Войти</button>
    </form>
  )
}

export default Login;