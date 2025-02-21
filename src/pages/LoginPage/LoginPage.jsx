import Container from '../../components/Container/Container.jsx';
import LoginForm from '../../components/Login/LoginForm/LoginForm.jsx';
import LoginImage from '../../components/Login/LoginImage/LoginImage.jsx';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <>
      <Container>
        <div className={css.loginPage}>
          <LoginImage />
          <LoginForm />
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
