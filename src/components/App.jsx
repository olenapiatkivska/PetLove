import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../pages/HomePage/HomePage.jsx';
import NewsPage from '../pages/NewsPage/NewsPage.jsx';
import NoticesPage from '../pages/NoticesPage/NoticesPage.jsx';
import FriendsPage from '../pages/FriendsPage/FriendsPage.jsx';
// import PrivateRoute from './PrivateRoute.js';
// import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx';
// import AddPetPage from '../pages/AddPetPage/AddPetPage.jsx';
// import RestrictedRoute from './RestrictedRoute.js';
// import LoginPage from '../pages/LoginPage/LoginPage.jsx';
// import RegistrationPage from '../pages/RegistrationPage/RegistrationPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import { Suspense } from 'react';
import LoaderMain from './LoaderMain/LoaderMain.jsx';

function App() {
  return (
    <>
      <Suspense fallback={<LoaderMain />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="friends" element={<FriendsPage />} />
            {/* <Route
              path="profile"
              element={
                <PrivateRoute redirecTo="/home" component={<ProfilePage />} />
              }
            >
              <Route path="favorites" element={<Favorites />} />
            <Route path="viewed" element={<Viewed />} />
            </Route> */}
            {/* <Route
              path="add-pet"
              element={
                <PrivateRoute redirecTo="/home" component={<AddPetPage />} />
              }
            /> */}
            {/* <Route
              path="/login"
              element={
                <RestrictedRoute redirecTo="/home" component={<LoginPage />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirecTo="/home"
                  component={<RegistrationPage />}
                />
              }
            /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
