import css from './register.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.register}>
      <form className={css.register__form} onSubmit={handleSubmit}>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          name="username"
          className={css.register__input}
          placeholder="Insert username"
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          name="email"
          className={css.register__input}
          autoComplete="off"
          placeholder="Insert email"
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          className={css.register__input}
          autoComplete="off"
          placeholder="Insert password"
          minLength={7}
        />
        <button className={css.register__button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
