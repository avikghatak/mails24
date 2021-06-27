import { useFormik } from "formik";
import "./Login.css";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email address";
  }
  return errors;
};

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validate,
    onSubmit: (values) => {
      formik.resetForm();
      alert(JSON.stringify(values, null, 2));
    },
  });
  var usernameErr;
  var passErr;

  formik.errors.username ? (usernameErr = "redmarker") : (usernameErr = "");

  formik.errors.password ? (passErr = "redmarker") : (passErr = "");

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="username">
            <label htmlFor="username" className="h6">
              Username
            </label>
            <br />
            <input
              id="username"
              name="username"
              type="textarea"
              onChange={formik.handleChange}
              value={formik.values.username}
              className={usernameErr}
            />
            {formik.errors.username ? (
              <span className="error-message">{formik.errors.username}</span>
            ) : null}
          </div>
          <br />
          <label htmlFor="password" className="h6">
            Password
          </label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className={passErr}
          />
          {formik.errors.password ? (
            <span className="error-message">{formik.errors.password}</span>
          ) : null}
          <br />
          <button type="submit" id="sub-btn" className="login-buttons">
            {props.btnwriteup}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;