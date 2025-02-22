import { useState } from 'react';
import ModalLogout from '../../Profile/ModalLogout/ModalLogout.jsx';
import css from './LogoutHeader.module.css';

const LogoutHeader = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      {showLogoutModal && (
        <ModalLogout
          showLogout={showLogoutModal}
          setShowLogout={setShowLogoutModal}
        />
      )}
      <button
        className={css.logoutBtnHeader}
        type="button"
        onClick={() => setShowLogoutModal(true)}
      >
        log out
      </button>
    </>
  );
};

export default LogoutHeader;
