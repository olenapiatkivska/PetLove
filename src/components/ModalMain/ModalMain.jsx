import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../assets/icons/icons.svg';
import css from './ModalMain.module.css';

const ModalMain = ({ children, fn }) => {
  const modalRoot = document?.getElementById('modal-root');
  const backdropRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        fn && fn(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [fn]);

  const handleBackdropClick = e => {
    if (e.target === backdropRef?.current) {
      fn && fn(false);
    }
  };
  return (
    <>
      {createPortal(
        <div
          className={css.backdropMain}
          ref={backdropRef}
          onClick={handleBackdropClick}
        >
          <div className={css.modalMain}>
            <button
              className={css.closeButtonMain}
              type="button"
              onClick={() => fn(false)}
            >
              <svg className={css.closeIcon} width={24} height={24}>
                <use href={`${sprite}#icon-close`} />
              </svg>
            </button>
            {children}
          </div>
        </div>,
        modalRoot,
      )}
    </>
  );
};

export default ModalMain;
