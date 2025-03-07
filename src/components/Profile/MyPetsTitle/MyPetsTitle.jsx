import { Link } from 'react-router-dom';
import sprite from '../../../assets/icons/icons.svg';
import css from './MyPetsTitle.module.css';

const MyPetsTitle = () => {
  return (
    <>
      <div className={css.myPetsTitleWrapp}>
        <h2 className={css.myPetsTitle}>My pets</h2>
        <Link className={css.myPetsTitleLink} to={'/add-pet'}>
          Add pet{' '}
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default MyPetsTitle;
