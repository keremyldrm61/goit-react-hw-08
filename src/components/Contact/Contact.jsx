import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;