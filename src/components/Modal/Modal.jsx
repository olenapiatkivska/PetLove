import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import css from './Modal.module.css';

const Modal = ({ children, setIsShowMobileMenu }) => {
  const [isHomePage, setIsHomePage] = useState(false);
  const modalRoot = document?.getElementById('modal-root');
  const backdropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsHomePage(location.pathname === '/' || location.pathname === '/home');

    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setIsShowMobileMenu(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [location.pathname, setIsShowMobileMenu]);

  const handleBackdropClick = e => {
    if (e.target === backdropRef.current) {
      setIsShowMobileMenu(false);
    }
  };

  return (
    <>
      {createPortal(
        <div
          className={css.backdrop}
          ref={backdropRef}
          onClick={handleBackdropClick}
        >
          <div
            className={`${css.modal} ${
              isHomePage ? css.homePage : css.otherPage
            }`}
          >
            {children}
          </div>
        </div>,
        modalRoot,
      )}
    </>
  );
};

export default Modal;
