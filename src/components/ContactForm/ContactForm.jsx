import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Назва має складатися не менше ніж з 3 символів!")
          .max(50, "Має бути 50 символів або менше!")
          .required("Required"),
        number: Yup.string()
          .min(5, "Номер має бути не менше 5 символів!")
          .max(15, "Номер має бути менше 15 символів!")
          .required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className={s.contactForm}>
        <label htmlFor="name">Name:</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" className={s.error} />

        <label htmlFor="number">Number:</label>
        <Field name="number" type="text" />
        <ErrorMessage name="number" component="div" className={s.error} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
