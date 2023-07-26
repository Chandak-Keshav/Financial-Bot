import { useState } from "react";
import clsx from "clsx";
import styles from "./LoginForm.module.css";
import { useLoginFormValidator } from "./hooks/useLoginFormValidator";
import http from "../../http-common.js"

const LoginForm = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    http.get('/User',{
      params : {
        type : "Login",
        details : [form.email,form.password]
      }
    })
      .then((response) => {
        console.log(response)
        const status = response.data.status;
        console.log(status);
        if(status != "Succesful"){
          //this.setState({noError : false,errorString : status})
        }else{
          //window.localStorage.setItem("cookie",response.data.cookie)
          //this.setState({loggedIn : true});
        }

      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>
    <div className='topbar'>
            <br></br>
            <br></br>
            <h1 className='ori'>LOGIN</h1>
            <br></br>
    </div>
    <span class="headline">Financial Bot</span>
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.formGroup}>
        <input
          className={clsx(
            styles.formField,
            errors.email.dirty && errors.email.error && styles.formFieldError
          )}
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="Email"
        />
        {errors.email.dirty && errors.email.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
        ) : null}
      </div>
      <div className={styles.formGroup}>
        <input
          className={clsx(
            styles.formField,
            errors.password.dirty &&
              errors.password.error &&
              styles.formFieldError
          )}
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="Password"
        />
        {errors.password.dirty && errors.password.error ? (
          <p className={styles.formFieldErrorMessage}>
            {errors.password.message}
          </p>
        ) : null}
      </div>
      <div className={styles.formGroup}>
        <input
          className={clsx(
            styles.formField,
            errors.confirmPassword.dirty &&
              errors.confirmPassword.error &&
              styles.formFieldError
          )}
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
          onBlur={onBlurField}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
          <p className={styles.formFieldErrorMessage}>
            {errors.confirmPassword.message}
          </p>
        ) : null}
      </div>
      <div className={styles.formActions}>
        <button className="button" type="submit">
          Login
        </button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
