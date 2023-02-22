import css from './Login.module.css';
import { logIn } from 'Redux/auth/operations';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn({
      email: form.elements.email.value,
      password: form.elements.password.value
    }))
    form.reset()
  }

  return (
    <div className={css.login}>
      <form className={css.login__form} onSubmit={handleLogin}>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={css.login__input}
          autoComplete="off"
          placeholder="Insert email"
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          className={css.login__input}
          autoComplete="off"
          placeholder="Insert password"
        />
        <button className={css.login__button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
