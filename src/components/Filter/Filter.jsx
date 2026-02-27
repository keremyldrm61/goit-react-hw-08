import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="filter">
        Search
      </label>
      <input
        className={styles.input}
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search by name or phone number..."
      />
    </div>
  );
}

export default Filter;