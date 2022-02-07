import React, { useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import logo from '../images/logo.svg';

const Header = ({ loggedIn, onLogout }) => {
  const user = useContext(CurrentUserContext);
  const location = useLocation();
  const [linkText, setLinkText] = useState('');

  useEffect(() => {
    if (location.pathname === '/sign-in') return setLinkText('Регистрация');
    if (location.pathname === '/sign-up') return setLinkText('Войти');
  }, [location]);

  console.log(user);

  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта" className="header__logo" />
      {loggedIn ? (
        <div className="header__user-info">
          <p className="header__user">{user.email}</p>
          <Link className="header__link" onClick={onLogout}>
            Выйти
          </Link>
        </div>
      ) : (
        <Link
          className="header__link"
          to={(location) => {
            if (location.pathname === '/sign-in') return 'sign-up';
            if (location.pathname === '/sign-up') return 'sign-in';
          }}
        >
          {linkText}
        </Link>
      )}
    </header>
  );
};

export default Header;
