import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook App 📱</h1>
      <p className={styles.description}>
        Keep your contacts secure and well-organized with ease. Sign up today
        and access your personal phone book anytime, anywhere.
      </p>
      <Link to={"/register"} className={styles.registerButton}>
        Get Started Now
      </Link>
    </div>
  );
};

export default Home;
