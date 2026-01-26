import React, { useState, useEffect } from 'react'
import { formatPrice } from '../utils'

const FormRange = ({ label, name, size, min, max, step, defaultValue }) => {
    const [selectedRange, setSelectedRange] = useState(() => Number(defaultValue ?? max))

    useEffect(() => {
        setSelectedRange(Number(defaultValue ?? max))
    }, [defaultValue, max])
    return (
        <div className="form-control">
            <label htmlFor={name} className={`w-[95%] sm:w-full flex justify-between gap-0 px-2 mt-2 label cursor-pointer`}>
                <span className='label-text capitalize'>{label}</span>
                <span className='font-bold text-md'>{formatPrice(selectedRange)}</span>
            </label>
            <input type="range"
                name={name}
                min={min}
                max={max}
                value={selectedRange}
                step={step}
                className={`range range-primary ${size}`}
                onChange={(e) => setSelectedRange(Number(e.target.value))} />

            <div className="w-[95%] sm:w-full flex justify-between text-xs px-2 mt-2">
                <span className="font-bold text-md">0</span>
                <span className="font-bold text-md">Max: {formatPrice(max)}</span>
            </div>
        </div>
    )
}

export default FormRange
