import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth.js';
import { RemoveToFavorites } from '../../../redux/notices/operations.js';
import FavoriteCard from './FavoriteCard/FavoriteCard.jsx';
import css from './Favorites.module.css';
import { refreshUser } from '../../../redux/auth/operations.js';

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoritesNotices } = useAuth();

  const handleRemoveFavorites = id => {
    dispatch(RemoveToFavorites(id)).then(() => {
      dispatch(refreshUser());
    });
  };

  return (
    <>
      {favoritesNotices?.length > 0 ? (
        <ul className={css.favoriteCardList}>
          {favoritesNotices?.map(notice => (
            <FavoriteCard
              key={notice._id}
              notice={notice}
              onRemoveFavorites={handleRemoveFavorites}
            />
          ))}
        </ul>
      ) : (
        <p className={css.favoriteCardText}>
          Oops, <b>looks like there aren&apos;t any furries</b> on our adorable
          page yet. Do not worry! View your pets on the &quot;find your favorite
          pet&quot; page and add them to your favorites.
        </p>
      )}
    </>
  );
};

export default Favorites;
