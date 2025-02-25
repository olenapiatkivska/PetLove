import sprite from '../../../assets/icons/icons.svg';
import css from './CustomIcons.module.css';

export const NextIcon = () => {
  return (
    <svg width={18} height={18}>
      <use href={`${sprite}#icon-right`} />
    </svg>
  );
};

export const PreviousIcon = () => {
  return (
    <svg width={18} height={18}>
      <use xlinkHref={`${sprite}#icon-left`}></use>
    </svg>
  );
};

export const LastIcon = () => {
  return (
    <div className={css.iconContainer}>
      <svg width={18} height={18}>
        <use href={`${sprite}#icon-right`} />
      </svg>
      <svg width={18} height={18}>
        <use href={`${sprite}#icon-right`} />
      </svg>
    </div>
  );
};

export const FirstIcon = () => {
  return (
    <div className={css.iconContainer}>
      <svg width={18} height={18}>
        <use href={`${sprite}#icon-left`} />
      </svg>
      <svg width={18} height={18}>
        <use href={`${sprite}#icon-left`} />
      </svg>
    </div>
  );
};
