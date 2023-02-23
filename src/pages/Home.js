import css from './Home.module.css';
import phonebook from './../images/phonebook.png';

const Home = () => {
  return (
    <div className={css.login}>
      <h1>Hello, this is a Phonebook app!</h1>
      <img src={phonebook} alt="phonebbok icon"></img>{' '}
    </div>
  );
};

export default Home;
