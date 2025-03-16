import sprite from '../../../../assets/icons/icons.svg';
import css from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../../hooks/useAuth.js';
import {
  AddToFavorites,
  RemoveToFavorites,
} from '../../../../redux/notices/operations.js';

const Buttons = ({
  isFavorite,
  id,
  setIsFavorite,
  setShowFirstNotification,
}) => {
  const dispatch = useDispatch();
  const { favoritesNotices } = useAuth();

  const handleAddFavorites = () => {
    if (favoritesNotices?.length === 0) {
      setShowFirstNotification(true);
    }
    dispatch(AddToFavorites(id));
    setIsFavorite(true);
  };

  const handleRemoveFavorites = () => {
    dispatch(RemoveToFavorites(id));
    setIsFavorite(false);
  };

  return (
    <>
      <div className={css.buttonsWrapp}>
        <button
          className={css.btnFavorite}
          type="button"
          onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
        >
          {isFavorite ? 'Remove from' : 'Add to'}
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </button>
        <a
          className={css.btnContact}
          href={'mailto:biggest5family@gmail.com'}
          target="_blank"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Buttons;
