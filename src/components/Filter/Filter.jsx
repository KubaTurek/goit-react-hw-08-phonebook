import { useDispatch } from 'react-redux';
import { setFilter } from './../../Redux/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'Redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.filter}>
      <label>
        Search contacts by name
        <input
          className={css.input}
          type="search"
          placeholder="search contact"
          onChange={event => dispatch(setFilter(event.target.value))}
          value={filter}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
