import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.container}>
      <span className={styles.email}>{user.email}</span>
      <button className={styles.button} type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default UserMenu;