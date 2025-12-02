import React from 'react'
import { FormInput, SubmitButton } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='basic'>
      <Form method='post' className='card shadow-lg p-8 w-96 flex flex-col gap-3 bg-base-100'>
        <h4 className="text-center text-3xl font-bold">Login</h4>
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
        <SubmitButton text="login" />
        </div>
        <button type='button' className='capitalize btn btn-secondary btn-block'>Guest user</button>
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
