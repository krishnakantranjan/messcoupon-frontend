const Signup = () => {
  return (
      <div className='signup-container'>
          <h1 className='signup-title'>Sign Up</h1>
            <form className='signup-form'>
                <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' required />
                </div>
                <button type='submit' className='signup-button'>Sign Up</button>
                <p className='signup-footer'>Already have an account? <a href='/signup'>SignUp</a></p>
            </form>
      </div>
  )
}

export default Signup;
