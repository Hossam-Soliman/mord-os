import React from "react";

const LoginPage = () => {
  return (
    <form className='login-form'>
      <h1>Login</h1>
      <div className='form-input-material'>
        <input
          type='text'
          name='username'
          id='username'
          placeholder=' '
          autocomplete='off'
          required
          className='form-control-material'
        />
        <label for='username'>Username</label>
      </div>
      <div className='form-input-material'>
        <input
          type='password'
          name='password'
          id='password'
          placeholder=' '
          autocomplete='off'
          required
          className='form-control-material'
        />
        <label for='password'>Password</label>
      </div>
      <button type='submit' className='btn btn-ghost'>
        Login
      </button>
    </form>
  );
};

export default LoginPage;
