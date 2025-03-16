import sprite from '../../../../assets/icons/icons.svg';
import css from './PetAvatar.module.css';

const PetAvatar = ({ petImageURL }) => {
  return (
    <>
      <div className={css.petAvatarWrapp}>
        <div className={css.petAvatarBox}>
          {petImageURL !== '' ? (
            <img src={petImageURL} alt="Pet avatar" />
          ) : (
            <svg width={34} height={34}>
              <use href={`${sprite}#icon-footprint`} />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default PetAvatar;
