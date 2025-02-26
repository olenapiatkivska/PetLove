import { useDispatch, useSelector } from 'react-redux';
import { selectNotices } from '../../../redux/notices/noticesSelectors.js';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import { useState } from 'react';
import {
  AddToFavorites,
  RemoveToFavorites,
} from '../../../redux/notices/operations.js';
import ModalAttention from '../ModalAttention/ModalAttention.jsx';
import FirstItemNotification from '../FirstItemNotification/FirstItemNotification.jsx';

const NoticesList = () => {
  const notices = useSelector(selectNotices);
  const dispatch = useDispatch();
  const [showAttention, setShowAttention] = useState(false);
  const [showFirstNotification, setShowFirstNotification] = useState(false);

  const handleAddFavorites = id => {
    dispatch(AddToFavorites(id));
  };

  const handleRemoveFavorites = id => {
    dispatch(RemoveToFavorites(id));
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

      {notices?.length === 0 && (
        <p>
          Sorry, <b>no find</b> any notice for these search parameters!
        </p>
      )}

      {
        <ul>
          {notices?.map(notice => (
            <li key={notice?._id}>
              <NoticesItem
                notice={notice}
                setShowAttention={setShowAttention}
                setShowFirstNotification={setShowFirstNotification}
                onAddFavorites={handleAddFavorites}
                onRemoveFavorites={handleRemoveFavorites}
              />
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default NoticesList;
