import { useEffect } from 'react';
import ModalMain from '../../ModalMain/ModalMain.jsx';
import { NavLink } from 'react-router-dom';
import dogModalAttention from '../../../assets/images/comment-login.png';
import css from './ModalAttention.module.css';

const ModalAttention = ({ setShowAttention, showAttention }) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        showAttention && setShowAttention(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setShowAttention, showAttention]);

  useEffect(() => {
    if (showAttention) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAttention]);

  return (
    <>
      <ModalMain fn={setShowAttention}>
        <div className={css.modalAttentionWrapp}>
          <div className={css.dogModalAttentionWrapp}>
            <img src={dogModalAttention} />
          </div>
          <h3 className={css.modalAttentionTitle}>Attention</h3>
          <p className={css.modalAttentionText}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
        </div>
        <div className={css.modalAttentionBtnWrapp}>
          <NavLink className={css.modalAttentionLogIn} to={'/login'}>
            Log In
          </NavLink>
          <NavLink className={css.modalAttentionRegistr} to={'/register'}>
            Registration
          </NavLink>
        </div>
      </ModalMain>
    </>
  );
};

export default ModalAttention;
