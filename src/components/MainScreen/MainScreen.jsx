import { useEffect, useState } from 'react';
import sprite from '../../assets/icons/icons.svg';
import Loader from '../Loader/Loader.jsx';
import css from './MainScreen.module.css';
import Container from '../Container/Container.jsx';

const MainScreen = ({ onFinish }) => {
  const [showLogo, setShowLogo] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const loaderTimer = setTimeout(() => {
        setIsLoading(false);
        onFinish();
      }, 3400);

      return () => clearTimeout(loaderTimer);
    }
  }, [isLoading, onFinish]);

  return (
    <Container>
      <div className={css.mainScreenSection}>
        {showLogo ? (
          <svg className={css.mainScreenLogo} width={190} height={50}>
            <use href={`${sprite}#icon-logo-main`}></use>
          </svg>
        ) : isLoading ? (
          <Loader />
        ) : null}
      </div>
    </Container>
  );
};

export default MainScreen;
