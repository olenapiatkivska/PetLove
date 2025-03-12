import { NavLink, useLocation } from 'react-router-dom';
import css from './CategoryLinks.module.css';

const CategoryLinks = () => {
  const location = useLocation();

  return (
    <>
      <div className={css.categoryLinksContainer}>
        <NavLink
          className={({ isActive }) =>
            isActive || location.pathname === '/profile'
              ? `${css.link} ${css.activeLink}`
              : css.link
          }
          to={'favorites'}
        >
          My favorite pets
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.activeLink}` : css.link
          }
          to={'viewed'}
        >
          Viewed
        </NavLink>
      </div>
    </>
  );
};

export default CategoryLinks;
