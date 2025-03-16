import sprite from '../../assets/icons/icons.svg';
import catMob from '../../assets/images/not-found/not-found-cat-mob.png';
import catMob2x from '../../assets/images/not-found/not-found-cat-mob@2x.png';

import catTabl from '../../assets/images/not-found/not-found-cat-tabl.png';
import catTabl2x from '../../assets/images/not-found/not-found-cat-tabl@2x.png';

import catDesk from '../../assets/images/not-found/not-found-cat-desc.png';
import catDesk2x from '../../assets/images/not-found/not-found-cat-desc@2x.png';
import css from './NotFoundImg.module.css';

const NotFoundImg = () => {
  return (
    <>
      <div className={css.notFoundImgWrapp}>
        <div className={css.notFoundIcon}>
          <svg width={74} height={120}>
            <use href={`${sprite}#icon-four`}></use>
          </svg>
        </div>

        <div className={css.notFoundPictureWrapp}>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${catDesk} 1x, ${catDesk2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${catTabl} 1x, ${catTabl2x} 2x`}
            />
            <source
              media="(max-width: 767.98px)"
              srcSet={`${catMob} 1x, ${catMob2x} 2x`}
            />
            <img src={catMob} alt="Cat" />
          </picture>
        </div>

        <div className={css.notFoundIcon}>
          <svg width={74} height={120}>
            <use href={`${sprite}#icon-four`}></use>
          </svg>
        </div>
      </div>
    </>
  );
};

export default NotFoundImg;
