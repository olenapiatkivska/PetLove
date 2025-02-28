import { useEffect } from 'react';
import ModalMain from '../../ModalMain/ModalMain.jsx';
import { NavLink } from 'react-router-dom';
import catNotification from '../../../assets/images/comment-register.png';
import css from './FirstItemNotification.module.css';

const FirstItemNotification = ({
  setShowFirstNotification,
  showFirstNotification,
}) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        showFirstNotification && setShowFirstNotification(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setShowFirstNotification, showFirstNotification]);

  useEffect(() => {
    if (showFirstNotification) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showFirstNotification]);

  return (
    <>
      <ModalMain fn={setShowFirstNotification}>
        <div className={css.firstItemNotificationWrapp}>
          <div className={css.catNotificationWrapp}>
            <img src={catNotification} alt="Animated cat" />
          </div>

          <h3 className={css.firstItemNotificationTitle}>Congrats</h3>
        </div>
        <p className={css.firstItemNotificationText}>
          The first fluff in the favorites! May your friendship be the happiest
          and filled with fun.
        </p>

        <NavLink className={css.btnGoToProfile} to={'/profile'}>
          Go to profile
        </NavLink>
      </ModalMain>
    </>
  );
};

export default FirstItemNotification;
