import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = ({ setIsShowMobileMenu }) => {
  const handleClick = () => setIsShowMobileMenu(false);

  return (
    <>
      <div className={css.btnAuthContainer}>
        <NavLink
          className={css.btnAuthLogin}
          to={'/login'}
          onClick={handleClick}
        >
          log in
        </NavLink>
        <NavLink
          className={css.btnAuthRegister}
          to={'/register'}
          onClick={handleClick}
        >
          registration
        </NavLink>
      </div>
    </>
  );
};

export default AuthNav;
