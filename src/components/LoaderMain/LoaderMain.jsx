import { FadeLoader } from 'react-spinners';
import css from './LoaderMain.module.css';

const LoaderMain = () => {
  return (
    <div className={css.loaderMainContainer}>
      <FadeLoader
        className={css.loaderMain}
        color="var(--accent-color)"
        height={20}
        width={6}
        radius={3}
        margin={4}
        speedMultiplier={1.5}
        visible={true}
      />
    </div>
  );
};

export default LoaderMain;
