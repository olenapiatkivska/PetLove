import { useDispatch } from 'react-redux';
import { removePet } from '../../../../redux/auth/operations.js';
import PetInfo from '../PetInfo/PetInfo.jsx';
import sprite from '../../../../assets/icons/icons.svg';
import css from './PetItem.module.css';

const PetItem = ({ pet }) => {
  const { title, imgURL, _id } = pet;
  const dispatch = useDispatch();

  const handleDeletePet = () => dispatch(removePet(_id));

  return (
    <>
      <li className={css.petInfoItem}>
        <div className={css.petInfoImgWrapp}>
          <img src={imgURL} alt={title} />
        </div>

        <div>
          <h3 className={css.petInfoTitle}>{title}</h3>
          <PetInfo pet={pet} />
        </div>

        <button
          className={css.petItemBtnDelete}
          type="buttom"
          onClick={handleDeletePet}
        >
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </button>
      </li>
    </>
  );
};

export default PetItem;
