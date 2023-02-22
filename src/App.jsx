import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { lazy, useEffect } from 'react';
import css from './app.module.css';
import Layout from './Layout.js';
import { PrivateRoute } from 'routes/privateRaute';
import { RestrictedRoute } from 'routes/restrictedRoute';
import { refreshUser } from 'Redux/auth/operations';

const Home = lazy(() => import('./pages/Home.js'));
const Register = lazy(() => import('./pages/Register.js'));
const Login = lazy(() => import('./pages/Login.js'));
const Contacts = lazy(() => import('./pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
