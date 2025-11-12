import axios from 'axios';
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify';


const newsletterUrl = 'https://jsonplaceholder.typicode.com/posts';


export const action =async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
 try {
    const response = await axios.post(newsletterUrl, data);
    toast.success("Successfully Submitted");
    return redirect('/')
  } catch (error) {
    toast.error(error);
    return error;
  }
}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className='newsletter-form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>

      <div className="form-row">
        <label htmlFor="name">
          Name
        </label>
        <input type="text" name="name" id="name" defaultValue='kaushiki'/>
      </div>
      <div className="form-row">
        <label htmlFor="lastname">
          Last Name
        </label>
        <input type="text" name="lastname" id="lastname" defaultValue='bansal'/>
      </div>

      <div className="form-row">
        <label htmlFor="email">
          Email
        </label>
        <input type="email" name="email" id="email" defaultValue='test@text.com' />
      </div>
      <button type="submit" className='btn btn-block' style={{ marginTop: '0.5rem' }} disabled= {isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  )
}

export default Newsletter
