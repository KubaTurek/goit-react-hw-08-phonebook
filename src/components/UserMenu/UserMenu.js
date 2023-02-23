import { logOut } from 'Redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from './../../hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.loggedInNav}>
      <p>
        Hello <b>{user.email}</b>
      </p>
      <button
        className={css.loggedInNav__button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
