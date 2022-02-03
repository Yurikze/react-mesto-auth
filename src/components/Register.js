import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import success from '../images/Union.png';

const Register = ({onRegister, ...props}) => {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(registerData)
  }

  return (
    <>
      <div className="auth">
        <h2 className="auth__headline">Регистрация</h2>
        <form onSubmit={handleSubmit} className="auth__form">
          <div className="auth__input-container">
            <input
              name="email"
              value={registerData.email}
              className="auth__input"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              name="password"
              value={registerData.password}
              className="auth__input"
              type="text"
              placeholder="Пароль"
              onChange={handleChange}
            />
          </div>

          <button className="auth__submit" type="submit">
            Зарегистрироваться
          </button>
          <Link className="auth__link" to="/sign-in">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </div>
      <Popup isOpen={false} name={props.name} onClose={props.onClose}>
        <div className="popup__content">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть"
            data-delete
            onClick={props.onClose}
          ></button>
          <div className="popup__info-tooltip">
            <img src={success} alt="Регистрация" />
            <h2 className="popup__title popup__title_placement_tooltip">
              Вы успешно зарегистрировались!
            </h2>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Register;
