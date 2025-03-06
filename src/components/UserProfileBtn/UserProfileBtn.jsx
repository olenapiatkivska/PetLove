import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../../hooks/useAuth.js';
import sprite from '../../assets/icons/icons.svg';
import css from './UserProfileBtn.module.css';
import { Link } from 'react-router-dom';

const UserProfileBtn = ({ isHomePage }) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const { user } = useAuth();

  return (
    <>
      <Link className={css.userLinkBtn} to={'/profile'}>
        {user?.avatar ? (
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        )}
      </Link>
      {tablet && (
        <p
          className={`${css.userName} ${
            isHomePage ? css.whiteColor : css.darkColor
          }`}
        >
          {user.name}
        </p>
      )}
    </>
  );
};

export default UserProfileBtn;
