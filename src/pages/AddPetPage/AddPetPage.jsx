import CreationForm from '../../components/AddPet/CreationForm/CreationForm.jsx';
import ImageDog from '../../components/AddPet/ImageDog/ImageDog.jsx';
import TitleAddPet from '../../components/AddPet/TitleAddPet/TitleAddPet.jsx';
import Container from '../../components/Container/Container.jsx';
import css from './AddPetPage.module.css';

const AddPetPage = () => {
  return (
    <>
      <Container>
        <div className={css.addPetPageWrapp}>
          <ImageDog />
          <div className={css.addPetPageForm}>
            <TitleAddPet />
            <CreationForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddPetPage;
