import sprite from '../../../assets/icons/icons.svg';
import css from './UserAndEditBtns.module.css';

const UserAndEditBtns = ({ setShowEditForm }) => {
  return (
    <>
      <div className={css.userAndEditBtnsBox}>
        <div className={css.userBox}>
          <p>User</p>
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        </div>

        <button
          className={css.editBtn}
          type="button"
          onClick={() => setShowEditForm(true)}
        >
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-pencil`} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default UserAndEditBtns;
