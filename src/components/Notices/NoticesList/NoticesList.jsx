import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectNotices } from '../../../redux/notices/noticesSelectors.js';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import { useState } from 'react';
import {
  AddToFavorites,
  RemoveToFavorites,
} from '../../../redux/notices/operations.js';
import ModalAttention from '../ModalAttention/ModalAttention.jsx';
import FirstItemNotification from '../FirstItemNotification/FirstItemNotification.jsx';
import css from './NoticesList.module.css';
import { refreshUser } from '../../../redux/auth/operations.js';

const NoticesList = () => {
  const notices = useSelector(selectNotices, shallowEqual);
  const dispatch = useDispatch();
  const [showAttention, setShowAttention] = useState(false);
  const [showFirstNotification, setShowFirstNotification] = useState(false);

  const handleAddFavorites = id => {
    dispatch(AddToFavorites(id)).then(() => {
      dispatch(refreshUser());
    });
  };

  const handleRemoveFavorites = id => {
    dispatch(RemoveToFavorites(id)).then(() => {
      dispatch(refreshUser());
    });
  };

  return (
    <>
      {showFirstNotification && (
        <FirstItemNotification
          setShowFirstNotification={setShowFirstNotification}
          showFirstNotification={showFirstNotification}
        />
      )}

      {showAttention && (
        <ModalAttention
          setShowAttention={setShowAttention}
          showAttention={showAttention}
        />
      )}

      {notices?.length === 0 ? (
        <p>
          Sorry, <b>no find</b> any notice for these search parameters!
        </p>
      ) : (
        <ul className={css.noticesList}>
          {notices?.map(notice => (
            <NoticesItem
              key={notice?._id}
              notice={notice}
              setShowAttention={setShowAttention}
              setShowFirstNotification={setShowFirstNotification}
              onAddFavorites={handleAddFavorites}
              onRemoveFavorites={handleRemoveFavorites}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default NoticesList;
