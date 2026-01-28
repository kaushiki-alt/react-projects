import React from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';


const Theme = () => {
    const dispatch = useDispatch()
    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={() => dispatch(toggleTheme())} />
            <BsSunFill className='swap-on size-4' />
            <BsMoonFill className='swap-off size-4' />
        </label>
    )
}

export default Theme
