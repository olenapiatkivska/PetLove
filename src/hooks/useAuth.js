import { useSelector } from 'react-redux';
import {
  selectFavoritesNotices,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectPets,
  selectUser,
  selectViewedNotices,
} from '../redux/auth/authSelectors.js';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const favoritesNotices = useSelector(selectFavoritesNotices);
  const viewedNotices = useSelector(selectViewedNotices);
  const pets = useSelector(selectPets);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isLoading,
    favoritesNotices,
    viewedNotices,
    pets,
  };
};
