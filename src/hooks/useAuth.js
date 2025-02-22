import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/auth/authSelectors.js';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isLoading,
  };
};
