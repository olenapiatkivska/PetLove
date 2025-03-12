import { useSelector } from 'react-redux';
import { selectViewedNotices } from '../../../../redux/auth/authSelectors.js';
import { useState } from 'react';
import NoticesItem from '../../../Notices/NoticesItem/NoticesItem.jsx';
import css from './ViewedList.module.css';

const ViewedList = () => {
  const viewedNotices = useSelector(selectViewedNotices);
  const [, setShowFirstNotification] = useState(false);

  return (
    <>
      <div className={css.viewedListContainer}>
        {viewedNotices.map(notice => (
          <NoticesItem
            key={notice._id}
            notice={notice}
            setShowAttention={null}
            setShowFirstNotification={setShowFirstNotification}
          />
        ))}
      </div>
    </>
  );
};

export default ViewedList;
