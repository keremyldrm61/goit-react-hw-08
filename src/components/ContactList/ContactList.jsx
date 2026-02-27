import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this?')) {
      dispatch(deleteContact(id));
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (contacts.length === 0) {
    return <div className={styles.empty}>No contacts found</div>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default ContactList;