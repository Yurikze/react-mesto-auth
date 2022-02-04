import React, {useEffect, useState} from 'react';
import { useLocation, useRouteMatch, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = () => {

  const location = useLocation()
  const [linkText, setLinkText] = useState('')

  useEffect(() => {
    if (location.pathname === '/sign-in') return setLinkText('Регистрация')
    if (location.pathname === '/sign-up') return setLinkText('Войти')
  }, [location])



  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта" className="header__logo" />
      <Link to={location => {
        if (location.pathname === '/sign-in') return 'sign-up'
        if (location.pathname === '/sign-up') return 'sign-in'
      }}>{linkText}</Link>
    </header>
  );
};

export default Header;
