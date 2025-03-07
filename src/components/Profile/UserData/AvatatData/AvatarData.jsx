import { useAuth } from '../../../../hooks/useAuth.js';
import sprite from '../../../../assets/icons/icons.svg';
import css from './AvatarData.module.css';

const AvatarData = ({ setShowEditForm }) => {
  const { user } = useAuth();

  return (
    <>
      <div className={css.avatarDataBox}>
        <div className={css.avatarWrapp}>
          {user?.avatar ? (
            <img src={user.avatar} alt={`Avatar of ${user.name}`} />
          ) : (
            <svg width={40} height={40}>
              <use href={`${sprite}#icon-user`}></use>
            </svg>
          )}
        </div>
        {!user.avatar && (
          <button
            className={css.avatarDataBtn}
            type="button"
            onClick={() => setShowEditForm(true)}
          >
            Upload photo
          </button>
        )}
      </div>
    </>
  );
};

export default AvatarData;
