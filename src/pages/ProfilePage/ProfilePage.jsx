import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container.jsx';
import UserInformation from '../../components/Profile/UserInformation.jsx';
import css from './ProfilePage.module.css';
import UserAndEditBtns from '../../components/Profile/UserAndEditBtns/UserAndEditBtns.jsx';
import EditProfileModal from '../../components/Profile/EditProfileModal/EditProfileModal.jsx';
import CategoryLinks from '../../components/Profile/CategoryLinks/CategoryLinks.jsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      navigate('favorites');
    }
  }, [location.pathname, navigate]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, []);

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
          <div className={css.profilePageUserWrapp}>
            <UserAndEditBtns setShowEditForm={setShowEditForm} />
            <UserInformation setShowEditForm={setShowEditForm} />
          </div>

          <div>
            <CategoryLinks />
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
