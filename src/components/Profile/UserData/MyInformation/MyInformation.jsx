import { useAuth } from '../../../../hooks/useAuth.js';
import css from './MyInformation.module.css';

const MyInformation = () => {
  const { user } = useAuth();

  return (
    <>
      <div className={css.myInformationContainer}>
        <h2 className={css.myInformationTitle}>My information</h2>
        <ul className={css.myInformationList}>
          <li style={{ borderColor: user.name && 'var(--accent-color)' }}>
            {user?.name}
          </li>
          <li style={{ borderColor: user.email && 'var(--accent-color)' }}>
            {user?.email}
          </li>
          <li style={{ borderColor: user.phone && 'var(--accent-color)' }}>
            {user?.phone || '+380'}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyInformation;
