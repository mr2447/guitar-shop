import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try { 
      const { data } = await login({
        //spread operatoe used to set the variables field in mutation to be an object wiht key/value pairs that match directly to what out formState object looks like
        variables: { ...formState}
      });
      console.log({data})
      Auth.login(data.login.token)
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='login_cont'>
       <div className='login_img'>
          <img 
          src={`${process.env.PUBLIC_URL}/img/aboutImg2.jpeg`} 
          alt='cover'
          width={'500px'}/>
    
        </div>
      <div>
          <div className='login_title'>
            <h4 >Login</h4>
          </div>
          <div>
            <form 
             onSubmit={handleFormSubmit}
             className='login_form'
             >
               <label className='label2' htmlFor='email'>Email</label>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
               <label className='label2' htmlFor='email'>Password</label>
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />

              <button  className='btn_login' type='submit'>
                Login
              </button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
    </main>
  );
};

export default Login;
