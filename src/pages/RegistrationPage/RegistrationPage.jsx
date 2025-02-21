import Container from '../../components/Container/Container.jsx';
import RegistrationForm from '../../components/Registration/RegistrationForm/RegistrationForm.jsx';
import RegistrationImage from '../../components/Registration/RegistrationImage/RegistrationImage.jsx';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <Container>
      <div className={css.registrationPage}>
        <RegistrationImage />
        <RegistrationForm />
      </div>
    </Container>
  );
};

export default RegistrationPage;
