import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            alert("Formik registration successful!");
            resetForm();
          });
      }}
    >
      <Form>
        <h2>Formik Registration Form</h2>

        <div>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
