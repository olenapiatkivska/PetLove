import { useEffect, useState } from 'react';
import sprite from '../../assets/icons/icons.svg';
import Loader from '../Loader/Loader.jsx';
import css from './MainScreen.module.css';
import Container from '../Container/Container.jsx';

const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 2000);
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 3400);
    }
  }, [isLoading]);

  return (
    <Container>
      <div className={css.mainScreenSection}>
        {isLoading ? (
          <Loader />
        ) : (
          <svg className={css.mainScreenLogo} width={190} height={50}>
            <use href={`${sprite}#icon-logo-main`}></use>
          </svg>
        )}
      </div>
    </Container>
  );
};

export default MainScreen;
