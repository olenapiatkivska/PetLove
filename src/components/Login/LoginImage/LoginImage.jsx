import loginImgMob from '../../../assets/images/login-img/login-img-mob.png';
import loginImgMob2x from '../../../assets/images/login-img/login-img-mob@2x.png';
import loginImgTabl from '../../../assets/images/login-img/login-img-tabl.png';
import loginImgTabl2x from '../../../assets/images/login-img/login-img-tabl@2x.png';
import loginImgDesk from '../../../assets/images/login-img/login-img-desc.png';
import loginImgDesc2x from '../../../assets/images/login-img/login-img-desc@2x.png';
import loginDog from '../../../assets/images/comment-login.png';

import sprite from '../../../assets/icons/icons.svg';
import { useMediaQuery } from 'react-responsive';
import css from './LoginImage.module.css';

const LoginImage = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const desktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <div className={css.registrationImageContainer}>
        <picture className={css.registrationPicture}>
          <source
            media="(min-width: 1280px)"
            srcSet={`${loginImgDesk} 1x, ${loginImgDesc2x} 2x`}
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${loginImgTabl} 1x, ${loginImgTabl2x} 2x`}
          />

          <source
            media="(max-width: 767px)"
            srcSet={`${loginImgMob} 1x, ${loginImgMob2x} 2x`}
          />

          <img
            className={css.registrationImage}
            src={loginImgMob}
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
                src={loginDog}
                width={32}
                height={32}
                alt="Avatar"
              />
            </div>

            <div className={css.messageCommentWrapp}>
              <div className={css.messageNameBirthday}>
                <p className={css.messageContainerName}>Rich</p>
                <p className={css.messageContainerBirthday}>
                  Birthday:
                  <span> 21.09.2020</span>
                </p>
              </div>
              <p className={css.messageContainerComment}>
                Rich would be the perfect addition to an active family that
                loves to play and go on walks. I bet he would love having a
                doggy playmate too!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginImage;
