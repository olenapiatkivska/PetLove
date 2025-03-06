import { useEffect, useState } from 'react';
import Container from '../Container/Container.jsx';
import Logo from './Logo/Logo.jsx';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import NavMenu from './NavMenu/NavMenu.jsx';
import css from './Header.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import AuthNav from '../AuthNav/AuthNav.jsx';
import LogoutHeader from './LogoutHeader/LogoutHeader.jsx';
import UserProfileBtn from '../UserProfileBtn/UserProfileBtn.jsx';

const Header = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const tabletEnd = useMediaQuery({ maxWidth: 1279.98 });
  const desctop = useMediaQuery({ minWidth: 1280 });
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    setIsHomePage(location.pathname === '/home' || location.pathname === '/');
  }, [location.pathname]);

  return (
    <Container>
      <header className={css.headerMain}>
        <div
          className={`${css.headerContainer} ${
            isHomePage ? css.isHomePage : ''
          }`}
        >
          <Logo isHomePage={isHomePage} />
          {desctop && <NavMenu isHomePage={isHomePage} />}
          <div className={css.authNavWrapp}>
            {((!isLoggedIn && !isHomePage && tablet && tabletEnd) ||
              (!isLoggedIn && desctop)) && <AuthNav />}
            {isLoggedIn && !isHomePage && tablet && <LogoutHeader />}
            {isLoggedIn && <UserProfileBtn isHomePage={isHomePage} />}
            <BurgerMenu isHomePage={isHomePage} />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
