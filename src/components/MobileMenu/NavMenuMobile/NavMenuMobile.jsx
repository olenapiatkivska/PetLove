import { NavLink } from 'react-router-dom';
import css from './NavMenuMobile.module.css';

const NavMenuMobile = ({ isHomePage, setIsShowMobileMenu }) => {
  return (
    <>
      <nav className={css.navMenuMobile}>
        <NavLink
          className={({ isActive }) =>
            `${css.linkMenuMobile} ${
              isActive ? css.activeLinkMenuMobile : ''
            } ${isHomePage ? css.homePageMenuMobile : css.otherPageMenuMobile}`
          }
          to="/news"
          onClick={() => setIsShowMobileMenu(false)}
        >
          News
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${css.linkMenuMobile} ${
              isActive ? css.activeLinkMenuMobile : ''
            } ${isHomePage ? css.homePageMenuMobile : css.otherPageMenuMobile}`
          }
          to="/notices"
          onClick={() => setIsShowMobileMenu(false)}
        >
          Find pet
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${css.linkMenuMobile} ${
              isActive ? css.activeLinkMenuMobile : ''
            } ${isHomePage ? css.homePageMenuMobile : css.otherPageMenuMobile}`
          }
          to="/friends"
          onClick={() => setIsShowMobileMenu(false)}
        >
          Our friends
        </NavLink>
      </nav>
    </>
  );
};

export default NavMenuMobile;
