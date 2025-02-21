import registerImgMob from '../../../assets/images/register-img/register-img-mob.png';
import registerImgMob2x from '../../../assets/images/register-img/register-img-mob@2x.png';
import registerImgTabl from '../../../assets/images/register-img/register-img-tabl.png';
import registerImgTabl2x from '../../../assets/images/register-img/register-img-tabl@2x.png';
import registerImgDesk from '../../../assets/images/register-img/register-img-desc.png';
import registerImgDesc2x from '../../../assets/images/register-img/register-img-desc@2x.png';
import registerCat from '../../../assets/images/comment-register.png';

import sprite from '../../../assets/icons/icons.svg';
import { useMediaQuery } from 'react-responsive';
import css from './RegistrationImage.module.css';

const RegistrationImage = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const desktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <div className={css.registrationImageContainer}>
        <picture className={css.registrationPicture}>
          <source
            media="(min-width: 1280px)"
            srcSet={`${registerImgDesk} 1x, ${registerImgDesc2x} 2x`}
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${registerImgTabl} 1x, ${registerImgTabl2x} 2x`}
          />

          <source
            media="(max-width: 767px)"
            srcSet={`${registerImgMob} 1x, ${registerImgMob2x} 2x`}
          />

          <img
            className={css.registrationImage}
            src={registerImgMob}
            alt="Cat"
            loading="lazy"
          />
        </picture>
        <svg width={332} className={css.registrationImageSvg}>
          <use
            href={desktop ? `${sprite}#icon-shape-pc` : `${sprite}#icon-shape`}
          />
        </svg>

        {tablet && (
          <div className={css.messageContainer}>
            <div className={css.messageContainerImgWrapp}>
              <img
                className={css.messageContainerImg}
                src={registerCat}
                width={32}
                height={32}
                alt="Avatar"
              />
            </div>

            <div className={css.messageCommentWrapp}>
              <div className={css.messageNameBirthday}>
                <p className={css.messageContainerName}>Jack</p>
                <p className={css.messageContainerBirthday}>
                  Birthday:
                  <span> 18.10.2021</span>
                </p>
              </div>
              <p className={css.messageContainerComment}>
                Jack is a gray Persian cat with green eyes. He loves to be
                pampered and groomed, and enjoys playing with toys.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RegistrationImage;
