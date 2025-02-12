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
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

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
