import css from './Logout.module.css';

const Logout = ({ setShowLogout }) => {
  return (
    <button
      className={css.logoutBtn}
      type="button"
      onClick={() => setShowLogout(true)}
    >
      log out
    </button>
  );
};

export default Logout;
