import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import loaderTabl from '../../assets/images/loader-desc-tab.webp';
import loaderMob from '../../assets/images/loader-mob.webp';
import css from './Loader.module.css';

const Loader = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.loaderContainer}>
      <img
        className={css.loaderImg}
        src={tablet ? loaderTabl : loaderMob}
        alt="Loader"
      />
      <span className={css.loaderProgress}>{progress}%</span>
    </div>
  );
};

export default Loader;
