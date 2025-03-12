import { useSelector } from 'react-redux';
import { selectViewedNotices } from '../../../redux/auth/authSelectors.js';
import ViewedList from './ViewedList/ViewedList.jsx';
import css from './Viewed.module.css';

const Viewed = () => {
  const viewedNotices = useSelector(selectViewedNotices);

  return (
    <>
      <div>
        {viewedNotices?.length === 0 ? (
          <p className={css.viewedText}>
            Oops, <b>looks like there aren&apos;t any furries</b> on our
            adorable page yet. Do not worry! When you open notices, they will
            appear here.
          </p>
        ) : (
          <ViewedList />
        )}
      </div>
    </>
  );
};

export default Viewed;
