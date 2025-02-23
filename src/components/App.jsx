import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import LoaderMain from './LoaderMain/LoaderMain.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/authSelectors.js';
import { refreshUser } from '../redux/auth/operations.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage.jsx'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage.jsx'));
const FriendsPage = lazy(() => import('../pages/FriendsPage/FriendsPage.jsx'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage.jsx'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage.jsx'),
);
const Favorites = lazy(() =>
  import('../components/Profile/Favorites/Favorites.jsx'),
);
const Viewed = lazy(() => import('../components/Profile/Viewed/Viewed.jsx'));
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx'),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderMain />
  ) : (
    <>
      <Suspense fallback={<LoaderMain />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="friends" element={<FriendsPage />} />
            <Route
              path="profile"
              element={
                <PrivateRoute redirecTo="/home" component={ProfilePage} />
              }
            >
              <Route path="favorites" element={<Favorites />} />
              <Route path="viewed" element={<Viewed />} />
            </Route>
            <Route
              path="add-pet"
              element={
                <PrivateRoute redirecTo="/home" component={<AddPetPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/profile" component={LoginPage} />
              }
            />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  component={RegistrationPage}
                />
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
