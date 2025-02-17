import { NavLink } from 'react-router-dom';
import css from './NavMenu.module.css';

const NavMenu = ({ isHomePage }) => {
  return (
    <nav className={css.headerNav}>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.activeLink : ''} ${
            isHomePage ? css.homePage : css.otherPage
          }`
        }
        to="/news"
      >
        News
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.activeLink : ''} ${
            isHomePage ? css.homePage : css.otherPage
          }`
        }
        to="/notices"
      >
        Find pet
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.activeLink : ''} ${
            isHomePage ? css.homePage : css.otherPage
          }`
        }
        to="/friends"
      >
        Our friends
      </NavLink>
    </nav>
  );
};

export default NavMenu;
