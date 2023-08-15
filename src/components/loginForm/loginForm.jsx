import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from 'redux/operations';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import css from './loginForm.module.css';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;
    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };
  if (authenticated) return <Navigate to="/contacts" />;
  return (
    <form onSubmit={handleSubmit} className={css.loginForm}>
      <h2 >Sign in!</h2>
      <label >
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          required
          className={css.formInput}
        />
      </label>
      <label >
        <input
          type="password"
          name="userPassword"
          placeholder="Password"
          required
          minLength={7}
          className={css.formInput}
        />
      </label>
      <button type="submit" className={css.formButton}>
        Go
      </button>
    </form>
  );
};
