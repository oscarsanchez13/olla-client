import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className='SignUp'>
      <section>
        <header>
            <h2>Join Us!</h2>
        </header>
        <form className='signup-form'>            
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' placeholder="Enter Email" required/>
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' placeholder="Enter Password" required/>
            </div>
            <div>
              <label for="repeat-password">Repeat Password</label>
              <input type="password" name='repeat-password' id='repeat-password' placeholder="Repeat Password" required/>
            </div>
            <button type='submit' className='signin'>SignUp</button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;