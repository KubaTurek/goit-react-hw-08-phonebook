import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import { AppBar } from './components/AppBar/AppBar.js';

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
