import { Link } from 'react-router-dom';
import css from './FriendItem.module.css';
import { workHours } from '../../../functions/workHours.js';

const FriendItem = ({ friend }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } =
    friend;
  const workingHours = workHours(workDays);

  return (
    <>
      <Link
        className={css.friendItemLogo}
        to={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageUrl} alt={`Logo of ${title}`} />
      </Link>
      <div className={css.friendItemWrapp}>
        <h3 className={css.friendItemTitle}>{title}</h3>

        <p className={css.friendItemText}>
          Email:{' '}
          <Link
            className={css.friendItemTextLink}
            to={email ? `mailto:${email}` : '#'}
          >
            {email || 'website only'}
          </Link>
        </p>

        <p className={css.friendItemText}>
          Address:{' '}
          <Link
            className={css.friendItemTextLink}
            to={addressUrl ? `${addressUrl}` : '#'}
          >
            {address || 'website only'}
          </Link>
        </p>

        <p className={css.friendItemText}>
          Phone:{' '}
          <Link
            className={css.friendItemTextLink}
            to={phone ? `tel: ${phone}` : '#'}
          >
            {phone || 'website only'}
          </Link>
        </p>

        <span className={css.workingHours}>
          {workingHours || 'Day and night'}
        </span>
      </div>
    </>
  );
};

export default FriendItem;
