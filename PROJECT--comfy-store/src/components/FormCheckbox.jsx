import React from 'react'

const FormCheckbox = ({ size, label, name, defaultValue }) => {
  return (
            <div className="form-control items-center">
            <label htmlFor={name} className='label'>
                <span className='capitalize label-text'>{label}</span>
            </label>

            <input type="checkbox"
            name={name}
            defaultValue={defaultValue}
            className={`checkbox checkbox-primary ${size}`} />

        </div>

  )
}

export default FormCheckbox
