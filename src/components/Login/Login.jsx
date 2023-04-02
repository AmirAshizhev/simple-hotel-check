import './Login.css';
import React from 'react';

function Login () {
  return (
    <div className="login">
      <div className="login__box">
      <form className="login__form">
        <h2 className="login__title">Simple Hotel Check</h2>
        <fieldset className="login__fieldset">
          <label className="login__field">
            <span className="login__input-label">Логин</span>
            <input 
              type="email"  
              name="email" 
              // onChange={formValues.handleChange}
              // value = {formValues.values.email || ""}
              className="login__input" 
              required 
              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
              placeholder='login@mail.com'
            />
            <span className="login__input-error"></span>
          </label>
          <label className="login__field">
            <span className="login__input-label">Пароль</span>
              <input 
                type="password"  
                name="password" 
                // onChange={formValues.handleChange}
                // value = {formValues.values.password || ""}
                className="login__input"  
                required 
                minLength = {8}
              />
            <span className="login__input-error"></span>
          </label>
        </fieldset>
        <button className="login__button" type="submit" aria-label="Войти" >Войти</button>
      </form>
      </div>
    </div>
  )
}

export default Login;