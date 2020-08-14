import React, { useState } from 'react';

// new -- importing mutations, hooks to connect signup and login mutations from utils
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

// new -- adding JSON Web Token (JWT) authentication from the utils auth.js
import Auth from '../utils/auth';

// capture form field data and store in a state using useState() hook
const Signup = () => {
  // declare formState
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  // new -- add the mutation
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

      // console.log(formState);
      // console.log(name);

    setFormState({ ...formState, [name]: value, });
  };

// new -- added function detail
  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // console.log(formState);


    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from the form state object as variables for the mutation function
      const { data } = await addUser({
        variables: { ...formState }
      });
      // new -- added JSON Web Token (JWT)
      Auth.login(data.addUser.token);

      // console.log(data);

    } catch (e) {
      console.error(e);
    }
  };


  // // remove -- submit form - placeholder
      // const handleFormSubmit = async (event) => {
      //   event.preventDefault();
      // };


  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
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

export default Signup;
