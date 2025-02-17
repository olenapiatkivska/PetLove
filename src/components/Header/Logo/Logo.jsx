import { Link } from 'react-router-dom';
import sprite from '../../../assets/icons/icons.svg';
import css from './Logo.module.css';

const Logo = ({ isHomePage }) => {
  return (
    <div className={css.logoContainer}>
      <Link to={'/home'}>
        <svg className={css.logo}>
          <use
            href={
              isHomePage
                ? `${sprite}#icon-logo-white`
                : `${sprite}#icon-logo-header`
            }
          ></use>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
