import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth.js';
import ModalMain from '../../ModalMain/ModalMain.jsx';
import sprite from '../../../assets/icons/icons.svg';
import FormEditUser from './FormEditUser/FormEditUser.jsx';
import css from './EditProfileModal.module.css';

const EditProfileModal = ({ setShowEditForm, showEditForm }) => {
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState(user?.avatar || '');

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        showEditForm && setShowEditForm(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setShowEditForm, showEditForm]);

  useEffect(() => {
    if (showEditForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showEditForm]);

  return (
    <>
      <ModalMain fn={setShowEditForm}>
        <div className={css.editModalContainer}>
          <h2 className={css.editProfileModalTitle}>Edit information</h2>
          <div className={css.editProfileUser}>
            {imageUrl !== '' ? (
              <img src={imageUrl} alt="User's avatar" />
            ) : (
              <svg width={40} height={40}>
                <use href={`${sprite}#icon-user`} />
              </svg>
            )}
          </div>

          <FormEditUser
            setImageUrl={setImageUrl}
            setShowEditForm={setShowEditForm}
          />
        </div>
      </ModalMain>
    </>
  );
};

export default EditProfileModal;
