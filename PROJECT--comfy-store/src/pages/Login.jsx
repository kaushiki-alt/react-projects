import React from 'react'
import { FormInput, SubmitButton } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action = (store) => async({request}) => {
  
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try {
    const response = await customFetch.post('/auth/local', data)
    store.dispatch(loginUser(response.data))
    toast.success('logged in successfully')
    return redirect('/');
    
    // return redirect('/login');
  } catch (error) {
        const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';

    toast.error(errorMessage);
    return null;

  }
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try later.');
    }
  }
  return (
    <section className='basic'>
      <Form method='POST' className='card shadow-lg p-8 w-96 flex flex-col gap-3 bg-base-100'>
        <h4 className="text-center text-3xl font-bold">Login</h4>
<FormInput
          type='email'
          label='email'
          name='identifier'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />      
        <div>
        <SubmitButton text="login" />
        </div>
        <button type='button' className='capitalize btn btn-secondary btn-block' onClick={loginAsGuestUser}>Guest user</button>
        <p className='text-center'>Not a member yet?
          <Link to="/register"
          className='capitalize link-primary link link-hover ml-2'>
            Register</Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
