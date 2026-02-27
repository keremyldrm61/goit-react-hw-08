import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'The name must be at least 3 characters long!')
    .required('Name is required!'),
  number: Yup.string()
    .required('Phone number is required!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        contact.number === values.number
    );

    if (isDuplicate) {
      alert('This person is already in the contact list!');
      setSubmitting(false);
      return;
    }

    dispatch(addContact(values));
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
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
          <label className={styles.label} htmlFor="number">
            Phone
          </label>
          <Field className={styles.input} type="tel" name="number" id="number" />
          <ErrorMessage className={styles.error} name="number" component="span" />
        </div>

        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;