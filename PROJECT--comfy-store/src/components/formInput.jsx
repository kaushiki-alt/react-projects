import React from 'react'

const FormInput = ({ size, label, name, type, defaultValue }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='capitalize '>{label}</span>
      </label>      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input ${size}`}
      />
    </div>
  );
};
export default FormInput;