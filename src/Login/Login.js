import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='Login'>
      <section>
        <header>
            <h2>Welcome Back</h2>
        </header>
        <form className='signin-signup-form'>            
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit' className='signin'>Login</button>
            <button type='submit' className='signup'>Sign up</button>
            <button type='submit' className='demo'>Demo</button>
        </form>
      </section>
    </div>
  );
}

export default Login;