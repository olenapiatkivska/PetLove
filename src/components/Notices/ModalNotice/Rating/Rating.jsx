import sprite from '../../../../assets/icons/icons.svg';
import css from './Rating.module.css';

const Rating = ({ popularity }) => {
  const maxStars = 5;
  const MAX_POPULARITY = 37;
  const filledStars = Math.ceil((popularity / MAX_POPULARITY) * maxStars);

  const stars = Array.from({ length: maxStars }, (_, index) => (
    <svg key={index} width={16} height={16}>
      <use href={`${sprite}#icon-star${index < filledStars ? '' : 'Gray'}`} />
    </svg>
  ));

  return (
    <>
      <div className={css.ratingContainer}>
        {stars} {popularity}
      </div>
    </>
  );
};

export default Rating;
