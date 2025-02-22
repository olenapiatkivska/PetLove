import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations.js';
import { useEffect } from 'react';
import ModalMain from '../../ModalMain/ModalMain.jsx';
import catImg from '../../../assets/images/comment-register.png';
import css from './ModalLogout.module.css';

const ModalLogout = ({ setShowLogout, showLogout }) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => setShowLogout(false);
  const handleLogout = () => dispatch(logOut());

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        showLogout && setShowLogout(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setShowLogout, showLogout]);

  useEffect(() => {
    if (showLogout) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLogout]);

  return (
    <>
      <ModalMain fn={setShowLogout}>
        <div className={css.imgWrapp}>
          <img src={catImg} alt="Cat" />
        </div>
        <p className={css.modalLogoutText}>Already leaving?</p>

        <div className={css.btnWrapp}>
          <button className={css.btnYes} type="button" onClick={handleLogout}>
            Yes
          </button>
          <button
            className={css.btnCancel}
            type="button"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </ModalMain>
    </>
  );
};

export default ModalLogout;
