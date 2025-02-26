import { formatBirthday } from '../../../functions/formatBirthday.js';
import sprite from '../../../assets/icons/icons.svg';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth.js';
import ModalNotice from '../../Notices/ModalNotice/ModalNotice.jsx';
import { viewedPet } from '../../../redux/auth/operations.js';

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
      <div>
        <img src={imgURL} width={287} height={178} alt={title} />
        <h3>{title}</h3>
        <span>{popularity}</span>
        <ul>
          {details.map(({ label, value }) => (
            <li key={label}>
              <p>
                {label} <span>{value}</span>
              </p>
            </li>
          ))}
        </ul>
        <p>{comment}</p>
        <p>{price}</p>

        <div>
          <button type="button" onClick={handleLearnMore}>
            Learn more
          </button>
          <button
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
    </>
  );
};

export default NoticesItem;
