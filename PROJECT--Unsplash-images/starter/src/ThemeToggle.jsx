import React from 'react'
import { useGlobalContext } from './context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const {toggleDarkTheme, isDarkTheme } = useGlobalContext();
  return (
    <div className='toggle-container'>
        <button className='dark-toggle' type='button' onClick={toggleDarkTheme}>
          {isDarkTheme? <BsFillMoonFill className='toggle-icon' style={{color:'white'}}/> : <BsFillSunFill className='toggle-icon'/>}
        </button>
    </div>
  )
}

export default ThemeToggle
