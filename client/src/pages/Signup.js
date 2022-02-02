//add functionality for capturing form field data from a user and storing it in state using the useState() Hook from React
import React, { useState } from 'react';
//take that data on submit and send it to the server throught our mutation
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
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
    // use try/catch instead of promises to handle errors
  try {
    //execute addUser mutation and pass in variable data from form
    const { data } = await addUser({
      variables: { ...formState }
    });
    console.log(data)
    Auth.login(data.addUser.token);
  } catch(e) {
    console.error(e);
  }
  };
  

  return (
    <main className='login_cont' >
      <div className='login_img'>
          <img 
          src={`${process.env.PUBLIC_URL}/img/aboutImg2.jpeg`} 
          alt='cover'
          width={'500px'}/>
    
        </div>
      <div>
        
        <div className='login_title'>
            <h4 >Sign Up</h4>
          </div>
          <div>
            <form 
            className='login_form'
            onSubmit={handleFormSubmit}>
               <label  
               className='label2' 
               htmlFor='username'
               >Username</label>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
               <label
               className='label2'
                htmlFor='email'
                >Email</label>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
               <label
               className='label2'
                htmlFor='password'
                >Password</label>
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn_login' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
        </div>
    </main>
  );
};

export default Signup;
