import { useEffect } from 'react';
import ModalMain from '../../ModalMain/ModalMain.jsx';
import { NavLink } from 'react-router-dom';

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
        <div>
          <img />
          <h3>Attention</h3>
          <p>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
        </div>
        <NavLink to={'/login'}>Log In</NavLink>
        <NavLink to={'/register'}>Registration</NavLink>
      </ModalMain>
    </>
  );
};

export default ModalAttention;
