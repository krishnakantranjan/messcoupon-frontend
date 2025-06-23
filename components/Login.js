import React from 'react'
import { Link } from 'react-router-dom';
import Signup from './Signup';
const Login = () => {
  return (
      <div className='login-container'>
            <h1 className='login-title'>Login</h1>
            <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor='username'>Email:</label>
                    <input type='text' id='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' required />
                </div>
              <button type='submit' className='login-button'>Login</button>
                <p className='login-footer'>Don't have an account? <Link to="/signup">Signup</Link></p>
            </form>
    </div>
  )
}

export default Login;
