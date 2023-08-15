import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import { registerUserThunk } from 'redux/operations';
import { Navigate } from 'react-router-dom';
import css from './registerForm.module.css';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;
    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  if (authenticated) {
    return <Navigate to="/contacts" />;
  }

  return (
    // <form onSubmit={handleSubmit} className={css.registerForm}>
    //   <h2>Sign up!</h2>
    //   <label>
    //     <input type="text" name="userName" placeholder="User name" required />
    //   </label>
    //   <label>
    //     <input type="email" name="userEmail" placeholder="Email" required minLength={7} />
    //   </label>
    //   <label>
    //     <input
    //       type="password"
    //       name="userPassword"
    //       placeholder="Password"
    //       required
    //     />
    //   </label>
    //   <button type="submit">Next</button>
    // </form>
    <form onSubmit={handleSubmit} className={css.registerForm}>
      <h2 >Sign up!</h2>
      <label >
        <input
          type="text"
          name="userName"
          placeholder="User name"
          required
          className={css.formInput}
        />
      </label>
      <label >
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          required
          minLength={7}
          className={css.formInput}
        />
      </label>
      <label >
        <input
          type="password"
          name="userPassword"
          placeholder="Password"
          required
          className={css.formInput}
        />
      </label>
      <button type="submit" className={css.formButton}>
        Next
      </button>
    </form>
  );
};
