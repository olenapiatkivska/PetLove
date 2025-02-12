import heroImgMob from '../../../assets/images/hero/hero-mob.jpg';
import heroImgMob2x from '../../../assets/images/hero/hero-mob@2x.jpg';
import heroImgTabl from '../../../assets/images/hero/hero-tab.jpg';
import heroImgTabl2x from '../../../assets/images/hero/hero-tab@2x.jpg';
import heroImgDesk from '../../../assets/images/hero/hero-desc.jpg';
import heroImgDesk2x from '../../../assets/images/hero/hero-desc@2x.jpg';

import css from './HeroImg.module.css';

const HeroImg = () => {
  return (
    <>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${heroImgDesk} 1x, ${heroImgDesk2x} 2x`}
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${heroImgTabl} 1x, ${heroImgTabl2x} 2x`}
        />

        <source
          media="(max-width: 767px)"
          srcSet={`${heroImgMob} 1x, ${heroImgMob2x} 2x`}
        />

        <img
          className={css.heroImg}
          src={heroImgMob}
          alt="Girl and her dog"
          loading="lazy"
        />
      </picture>
    </>
  );
};

export default HeroImg;
