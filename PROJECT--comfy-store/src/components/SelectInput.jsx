import React from 'react'

const SelectInput = ({ size, label, name, list, defaultValue }) => {


    return (
        <div className="form-control">
            <label htmlFor={name} className='label'>
                <span className='capitalize '>{label}</span>
            </label>
            <select
                name={name}
                id={name}
                defaultValue={defaultValue}
                className={`select appearance-none ${size}`}>

                {list.map((item) => {
                    return (
                        <option key={item}>{item}</option>

                    )
                })}

            </select>
        </div>
    )
}

export default SelectInput
