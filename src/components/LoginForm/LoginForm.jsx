import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address!')
    .required('Email address required!'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters long!')
    .required('Password required!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(logIn(values));
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
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
          Log in
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;