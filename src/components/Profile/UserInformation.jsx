import { useState } from 'react';
import Logout from './Logout/Logout.jsx';
import ModalLogout from './ModalLogout/ModalLogout.jsx';
import AvatarData from './UserData/AvatatData/AvatarData.jsx';
import MyInformation from './UserData/MyInformation/MyInformation.jsx';

const UserInformation = ({ setShowEditForm }) => {
  const [showLogout, setShowLogout] = useState(false);
  return (
    <>
      <AvatarData setShowEditForm={setShowEditForm} />
      <MyInformation />

      <Logout setShowLogout={setShowLogout} />
      {showLogout && (
        <ModalLogout setShowLogout={setShowLogout} showLogout={showLogout} />
      )}
    </>
  );
};

export default UserInformation;
