import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
      <h2 className="auth__headline">Вход</h2>
      <form className="auth__form">
        <div className="auth__input-container">
          <input className="auth__input" type="text" placeholder="Email" />
          <input className="auth__input" type="text" placeholder="Пароль" />
        </div>

        <button className="auth__submit" type="submit">
          Зарегистрироваться
        </button>
        <Link className="auth__link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
};

export default Register;
