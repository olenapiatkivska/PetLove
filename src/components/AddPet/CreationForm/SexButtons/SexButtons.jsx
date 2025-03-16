import sprite from '../../../../assets/icons/icons.svg';
import css from './SexButtons.module.css';

const SexButtons = ({ setSexPet, sexPet }) => {
  const handleChooseSex = event => {
    const chooseValue = event.currentTarget.dataset.value;
    setSexPet(chooseValue);
  };

  return (
    <>
      <ul className={css.setBtnList}>
        <li
          className={sexPet === 'female' ? css.femaleActive : css.female}
          data-value="female"
          onClick={handleChooseSex}
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-female`} />
          </svg>
        </li>

        <li
          className={sexPet === 'male' ? css.maleActive : css.male}
          data-value="male"
          onClick={handleChooseSex}
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-male`} />
          </svg>
        </li>

        <li
          className={sexPet === 'multiple' ? css.multipleActive : css.multiple}
          data-value="multiple"
          onClick={handleChooseSex}
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-sex`} />
          </svg>
        </li>
      </ul>
    </>
  );
};

export default SexButtons;
