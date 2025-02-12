import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import LoaderMain from './LoaderMain/LoaderMain.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderMain />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
