import { useState } from 'react';
import { formatBirthday } from '../../../../functions/formatBirthday.js';
import ModalNotice from '../../../Notices/ModalNotice/ModalNotice.jsx';
import sprite from '../../../../assets/icons/icons.svg';
import css from './FavoriteCard.module.css';
import { useAuth } from '../../../../hooks/useAuth.js';

const FavoriteCard = ({ notice, onRemoveFavorites }) => {
  //   const { favoritesNotices } = useAuth();
  //   const [showDetails, setShowDetails] = useState(false);
  //   const {
  //     imgURL,
  //     name,
  //     title,
  //     birthday,
  //     sex,
  //     species,
  //     popularity,
  //     comment,
  //     category,
  //     price,
  //     _id,
  //   } = notice;
  //   const [isFavorite, setIsFavorite] = useState(
  //     favorites?.find(fav => (fav._id === _id ? true : false)),
  //   );

  //   const formattedDate = formatBirthday(birthday);

  //   const details = [
  //     { label: 'Name', value: name },
  //     { label: 'Birthday', value: formattedDate },
  //     { label: 'Sex', value: sex },
  //     { label: 'Species', value: species },
  //     { label: 'Category', value: category },
  //   ];

  const [showDetails, setShowDetails] = useState(false);
  const { favoritesNotices } = useAuth();

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

  const formattedDate = formatBirthday(birthday);
  const isFavorite = favoritesNotices.some(fav => fav._id === _id); // Перевіряємо у Redux-стані

  const details = [
    { label: 'Name', value: name },
    { label: 'Birthday', value: formattedDate },
    { label: 'Sex', value: sex },
    { label: 'Species', value: species },
    { label: 'Category', value: category },
  ];

  const handleRemoveFavorites = () => onRemoveFavorites(_id);

  const handleLearnMore = () => setShowDetails(true);

  return (
    <>
      {showDetails && (
        <ModalNotice
          setShowDetails={setShowDetails}
          notice={notice}
          showDetails={showDetails}
          isFavorite={isFavorite}
          //   setIsFavorite={setIsFavorite}
        />
      )}

      <li className={css.favoriteCardContainer}>
        <div className={css.favoriteCardImgWrapp}>
          <img src={imgURL} width={287} height={178} alt={title} />
        </div>
        <div className={css.favoriteCardTitleWrapp}>
          <h3 className={css.favoriteCardTitle}>{title}</h3>
          <span className={css.favoriteCardPopularity}>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-star`} />
            </svg>{' '}
            {popularity}
          </span>
        </div>
        <ul className={css.favoriteCardDetails}>
          {details.map(({ label, value }) => (
            <li className={css.favoriteCardItem} key={label}>
              <p>{label}</p>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <p className={css.favoriteCardComment}>{comment}</p>

        {price !== undefined && price !== null && (
          <p className={css.favoriteCardPrice}>${price}</p>
        )}

        <div className={css.favoriteCardBtnWrapp}>
          <button
            className={css.favoriteCardBtnLearnMore}
            type="button"
            onClick={handleLearnMore}
          >
            Learn more
          </button>
          <button
            className={css.favoriteCardBtnRemove}
            type="button"
            onClick={handleRemoveFavorites}
          >
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </li>
    </>
  );
};

export default FavoriteCard;
