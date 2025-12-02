import React from 'react'
import { useNavigation } from 'react-router-dom'

const submitButton = ({text}) => {
    const navigation = useNavigation()
    console.log(navigation);

    const isSubmitting = navigation.state === 'submitting';
    
  return (
    <div>
      <button
      type='submit'
      className="btn btn-primary btn-block capitalize"
      disabled={isSubmitting}>
        {isSubmitting ? (
            <span className='loading loading-spinner'>sending...</span>
        ):(
            text || 'submit'
        )}
      </button>
    </div>
  )
}

export default submitButton
