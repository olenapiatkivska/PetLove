import { formatBirthday } from '../../../functions/formatBirthday.js';
import sprite from '../../../assets/icons/icons.svg';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth.js';
import ModalNotice from '../../Notices/ModalNotice/ModalNotice.jsx';
import { viewedPet } from '../../../redux/auth/operations.js';
import css from './NoticesItem.module.css';

const NoticesItem = ({
  notice,
  setShowAttention,
  setShowFirstNotification,
  onAddFavorites,
  onRemoveFavorites,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const [isViewedPage, setIsViewedPage] = useState(false);

  const {
    imgURL,
    name,
    title,
    birthday,
    sex,
    species,
    popularity,
    comment,
    category,
    price,
    _id,
  } = notice;
  const { isLoggedIn, favoritesNotices } = useAuth();
  const [isFavorite, setIsFavorite] = useState(
    favoritesNotices?.find(fav => (fav._id === _id ? true : false)),
  );

  const formattedDate = formatBirthday(birthday);

  const details = [
    { label: 'Name', value: name },
    { label: 'Birthday', value: formattedDate },
    { label: 'Sex', value: sex },
    { label: 'Species', value: species },
    { label: 'Category', value: category },
  ];

  useEffect(() => {
    if (location?.pathname === '/profile/viewed') {
      setIsViewedPage(true);
    } else {
      setIsViewedPage(false);
    }
  }, [location?.pathname]);

  useEffect(() => {
    if (showDetails && !isViewedPage) {
      dispatch(viewedPet(_id));
    }
  }, [_id, isViewedPage, showDetails]);

  const handleAddFavorites = () => {
    if (!isLoggedIn) {
      setShowAttention(true);
    } else {
      if (favoritesNotices?.length == 0) {
        setShowFirstNotification(true);
      }
      onAddFavorites(_id);
      setIsFavorite(true);
    }
  };

  const handleRemoveFavorites = () => {
    onRemoveFavorites(_id);
    setIsFavorite(false);
  };

  const handleLearnMore = () => {
    !isLoggedIn ? setShowAttention(true) : setShowDetails(true);
  };

  return (
    <>
      {showDetails && <ModalNotice />}
      <li
        className={`${css.noticesItem} ${isViewedPage ? css.viewedPage : ''}`}
      >
        <div>
          <div
            className={`${css.noticesItemImgWrapp} ${
              isViewedPage ? css.viewedPage : ''
            }`}
          >
            <img src={imgURL} width={287} height={178} alt={title} />
          </div>
          <div className={css.titlePopularityWrapp}>
            <h3 className={css.noticesItemTitle}>{title}</h3>
            <span className={css.noticesItemPopularity}>
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-star`} />
              </svg>{' '}
              {popularity}
            </span>
          </div>
          <ul className={css.noticesItemDetails}>
            {details.map(({ label, value }) => (
              <li className={css.noticesItemDetailsItem} key={label}>
                <p>{label}</p>
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <p className={css.noticesItemComment}>{comment}</p>

          {price !== undefined && price !== null && (
            <p className={css.noticesItemPrice}>${price}</p>
          )}

          <div className={css.noticesItemBtnWrapp}>
            <button
              className={css.noticesItemLearnMore}
              type="button"
              onClick={handleLearnMore}
            >
              Learn more
            </button>
            <button
              className={css.noticesItemFavorite}
              type="button"
              onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
            >
              <svg width={18} height={18}>
                <use
                  href={
                    isFavorite ? `${sprite}#icon-trash` : `${sprite}#icon-heart`
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default NoticesItem;
