import React, { useState, useEffect } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
    winter: 'winter',
    dracula: 'dracula',
};

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.winter;
};

const Theme = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage())
    const toggleTheme = () => {
        const { winter, dracula } = themes;
        const newTheme = theme === winter ? dracula : winter;
        setTheme(newTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])


    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={toggleTheme} />
            <BsSunFill className='swap-on size-4' />
            <BsMoonFill className='swap-off size-4' />

        </label>
    )
}

export default Theme
