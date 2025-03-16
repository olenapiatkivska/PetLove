import { useMediaQuery } from 'react-responsive';
import sprite from '../../../assets/icons/icons.svg';
import dogMob from '../../../assets/images/add-pet/dog-mob.png';
import dogMob2x from '../../../assets/images/add-pet/dog-mob@2x.png';

import dogTabl from '../../../assets/images/add-pet/dog-tabl.png';
import dogTabl2x from '../../../assets/images/add-pet/dog-tabl@2x.png';

import dogDesk from '../../../assets/images/add-pet/dog-desc.png';
import dogDesk2x from '../../../assets/images/add-pet/dog-desc@2x.png';
import css from './ImageDog.module.css';

const ImageDog = () => {
  const desktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <div className={css.imageDogWrapp}>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${dogDesk} 1x, ${dogDesk2x} 2x`}
            type="image/png"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${dogTabl} 1x, ${dogTabl2x} 2x`}
            type="image/png"
          />

          <source
            media="(max-width:  767.98px)"
            srcSet={`${dogMob} 1x, ${dogMob2x} 2x`}
            type="image/png"
          />

          <img src={dogMob} alt="Dog" loading="lazy" />
        </picture>
        <svg width={332}>
          <use
            href={desktop ? `${sprite}#icon-shape-pc` : `${sprite}#icon-shape`}
          ></use>
        </svg>
      </div>
    </>
  );
};

export default ImageDog;
