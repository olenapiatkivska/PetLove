import Modal from '../Modal/Modal.jsx';
import sprite from '../../assets/icons/icons.svg';
import css from './MobileMenu.module.css';
import NavMenuMobile from './NavMenuMobile/NavMenuMobile.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';

const MobileMenu = ({ setIsShowMobileMenu, isHomePage }) => {
  return (
    <>
      <Modal setIsShowMobileMenu={setIsShowMobileMenu}>
        <div className={css.mobileMenuContainer}>
          <button
            className={css.mobileMenuBtn}
            type="button"
            onClick={() => setIsShowMobileMenu(false)}
          >
            <svg
              className={`${css.mobileMenuBtnIcon} ${
                isHomePage ? css.dark : css.light
              }`}
              width={32}
              height={32}
            >
              <use href={`${sprite}#icon-close`} />
            </svg>
          </button>

          <NavMenuMobile
            isHomePage={isHomePage}
            setIsShowMobileMenu={setIsShowMobileMenu}
          />
          <AuthNav setIsShowMobileMenu={setIsShowMobileMenu} />
        </div>
      </Modal>
    </>
  );
};

export default MobileMenu;
