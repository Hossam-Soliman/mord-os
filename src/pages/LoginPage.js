import React from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import {
  setSigninFormEmail,
  setSigninFormPassword,
  setSignIn,
} from "../store/auth/AuthActions";
//selectors
import {
  getSigninFormEmail,
  getSigninFormPassword,
} from "../store/auth/AuthSelectors";

const LoginPage = () => {
  const email = useSelector((state) => getSigninFormEmail({ state })),
    password = useSelector((state) => getSigninFormPassword({ state })),
    dispatch = useDispatch();

  const handleSignInEmail = ({ target: { value } }) => {
    dispatch(setSigninFormEmail(value));
  };

  const handleSignInPassword = ({ target: { value } }) => {
    dispatch(setSigninFormPassword(value));
  };

  const handleSubmit = () => {
    dispatch(setSignIn());
  };

  return (
    <form className='login-form'>
      <h1>Login</h1>
      <div className='form-input-material'>
        <input
          type='email'
          placeholder=' '
          required
          className='form-control-material'
          onChange={handleSignInEmail}
          value={email}
        />
        <label>Email</label>
      </div>
      <div className='form-input-material'>
        <input
          type='password'
          placeholder=' '
          required
          className='form-control-material'
          onChange={handleSignInPassword}
          value={password}
        />
        <label>Password</label>
      </div>
      <button className='btn btn-ghost' onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default LoginPage;
