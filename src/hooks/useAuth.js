import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/authSelectors.js';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return {
    user,
    isLoggedIn,
  };
};
