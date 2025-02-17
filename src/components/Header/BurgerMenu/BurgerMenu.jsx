import { useEffect, useState } from 'react';
import sprite from '../../../assets/icons/icons.svg';
import css from './BurgerMenu.module.css';
import MobileMenu from '../../MobileMenu/MobileMenu.jsx';

const noScroll = isShowMobileMenu => {
  if (isShowMobileMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return () => {
    document.body.style.overflow = 'auto';
  };
};

const BurgerMenu = ({ isHomePage }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useEffect(() => {
    noScroll(isShowMobileMenu);
  }, [isShowMobileMenu]);

  return (
    <>
      <div className={css.burgerMenuContainer}>
        <button
          className={`${css.burgerMenuBtn} ${
            isHomePage ? css.homePageBurgerMenu : css.otherPageBurgerMenu
          }`}
          type="button"
          onClick={() => setIsShowMobileMenu(prev => !prev)}
        >
          <svg className={css.burgerMenuBtnIcon} width={32} height={32}>
            <use href={`${sprite}#icon-burger-menu`} />
          </svg>
        </button>
      </div>
      {isShowMobileMenu && (
        <MobileMenu
          setIsShowMobileMenu={setIsShowMobileMenu}
          isHomePage={isHomePage}
        />
      )}
    </>
  );
};

export default BurgerMenu;
