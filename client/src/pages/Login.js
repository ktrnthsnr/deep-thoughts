import React, { useState } from 'react';

// new -- importing login user mutation and apollo\react hooks
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

// new -- adding JSON Web Token (JWT) authentication from the utils auth.js
import Auth from '../utils/auth';

// Login component definition
const Login = (props) => {
  //  useState() statement 
  const [formState, setFormState] = useState({ email: '', password: '' });

  // new --  initialize our LOGIN_USER mutation with the useMutation() Hook // -- check 
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


// new - handleFormSubmit function 
  // submit form
const handleFormSubmit = async event => {
  event.preventDefault();

  try {
    const { data } = await login({
      variables: { ...formState }
    });

    // new -- added for JSON web token (JWT)
    Auth.login(data.login.token);

    // console.log(data);
  } catch (e) {
    console.error(e);
  }
};

  // previous - placeholder
      // // submit form
      // const handleFormSubmit = async (event) => {
      //   event.preventDefault();

      //   // clear form values
      //   setFormState({
      //     email: '',
      //     password: '',
      //   });
      // };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
              {error && <div>Sign up failed</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
