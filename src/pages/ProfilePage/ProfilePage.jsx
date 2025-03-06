import { useState } from 'react';
import Container from '../../components/Container/Container.jsx';
import UserInformation from '../../components/Profile/UserInformation.jsx';
import css from './ProfilePage.module.css';
import UserAndEditBtns from '../../components/Profile/UserAndEditBtns/UserAndEditBtns.jsx';
import EditProfileModal from '../../components/Profile/EditProfileModal/EditProfileModal.jsx';

const ProfilePage = () => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <Container>
        {showEditForm && (
          <EditProfileModal
            setShowEditForm={setShowEditForm}
            showEditForm={showEditForm}
          />
        )}

        <div className={css.profilePageContainer}>
          <UserAndEditBtns setShowEditForm={setShowEditForm} />
          <UserInformation setShowEditForm={setShowEditForm} />
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
