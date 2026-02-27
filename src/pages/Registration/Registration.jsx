import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './Registration.module.css';

const Registration = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Your Account</h2>
      <RegistrationForm />
    </div>
  );
}

export default Registration;