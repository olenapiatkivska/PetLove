import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import Container from '../../components/Container/Container.jsx';

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <div className={css.notFoundPageContainer}>
          <p className={css.notFoundPageText}>Ooops! This page not found :(</p>
          <Link className={css.notFoundPageLink} to={'/home'}>
            To home page
          </Link>
        </div>
      </Container>
    </>
  );
};

export default NotFoundPage;
