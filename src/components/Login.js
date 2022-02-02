import React from 'react';

const Login = () => {
  return (
    <div className="auth">
      <h2 className="auth__headline">Вход</h2>
      <form className="auth__form">
        <div className="auth__input-container">
          <input className="auth__input" type="text" placeholder="Email" />
          <input className="auth__input" type="text" placeholder="Пароль" />
        </div>
        <button className="auth__submit" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
