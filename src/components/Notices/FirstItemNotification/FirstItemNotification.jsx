import { useEffect } from 'react';
import ModalMain from '../../ModalMain/ModalMain.jsx';
import { NavLink } from 'react-router-dom';

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
        <div>
          <img />
          <h3>Congrats</h3>
          <p>
            The first fluff in the favorites! May your friendship be the
            happiest and filled with fun.
          </p>
        </div>
        <NavLink to={'/profile'}>Go to profile</NavLink>
      </ModalMain>
    </>
  );
};

export default FirstItemNotification;
