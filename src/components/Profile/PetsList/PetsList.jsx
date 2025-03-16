import { useAuth } from '../../../hooks/useAuth.js';
import PetItem from './PetItem/PetItem.jsx';
import css from './PetsList.module.css';

const PetsList = () => {
  const { pets } = useAuth();

  return (
    <>
      <ul className={css.petsList}>
        {pets.map(pet => (
          <PetItem key={pet._id} pet={pet} />
        ))}
      </ul>
    </>
  );
};

export default PetsList;
