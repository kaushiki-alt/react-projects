import React from 'react'
import { FormInput, SubmitButton } from '../components'
import { Form, Link, redirect } from 'react-router-dom'
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try {
    const response = await customFetch.post('/auth/local/register', data)
    toast.success('account created successfully')
    return redirect('/login');
  } catch (error) {
        const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';

    toast.error(errorMessage);
    return null;

  }
}

const Register = () => {
  
  return (
    <section className='basic'>
      <Form method="POST"
        className='card shadow-lg p-8 w-96 flex flex-col gap-3 bg-base-100'>
                  <h4 className="text-center text-3xl font-bold">Register</h4>

        <FormInput
          type='text'
          label='username'
          name='username'
          defaultValue='test'
        />
        <FormInput
          type='email'
          label='email'
          name='email'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />

        <div>
          <SubmitButton text="Register" />
        </div>

        <p className='text-center'>Already a Member?
          <Link to="/login"
          className='capitalize link-primary link link-hover ml-2'>
            Login</Link>
        </p>

      </Form>

    </section>
  )
}

export default Register
