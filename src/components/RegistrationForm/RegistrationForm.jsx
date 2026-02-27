import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'The name must be at least 3 characters long!')
    .required('Name required!'),
  email: Yup.string()
    .email('Invalid email address!')
    .required('Email address required!'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters long!')
    .required('Password required!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(register(values));
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <Field className={styles.input} type="text" name="name" id="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field className={styles.input} type="email" name="email" id="email" />
          <ErrorMessage className={styles.error} name="email" component="span" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Field className={styles.input} type="password" name="password" id="password" />
          <ErrorMessage className={styles.error} name="password" component="span" />
        </div>

        <button className={styles.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;