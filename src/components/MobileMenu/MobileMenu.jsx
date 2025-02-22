import Modal from '../Modal/Modal.jsx';
import sprite from '../../assets/icons/icons.svg';
import css from './MobileMenu.module.css';
import NavMenuMobile from './NavMenuMobile/NavMenuMobile.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { useState } from 'react';
import ModalLogout from '../Profile/ModalLogout/ModalLogout.jsx';
import { useMediaQuery } from 'react-responsive';

const MobileMenu = ({ setIsShowMobileMenu, isHomePage }) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const { isLoggedIn } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

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

          {isLoggedIn && !tablet ? (
            <button
              className={css.logoutBtn}
              type="button"
              onClick={() => setShowLogout(true)}
            >
              Log out
            </button>
          ) : (
            <AuthNav setIsShowMobileMenu={setIsShowMobileMenu} />
          )}
        </div>
      </Modal>

      {showLogout && (
        <ModalLogout setShowLogout={setShowLogout} showLogout={showLogout} />
      )}
    </>
  );
};

export default MobileMenu;
