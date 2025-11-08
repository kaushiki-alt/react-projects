import React from 'react'
import img from '../assets/not-found.svg';
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <div id='error'>
                <img src={img} alt="not found" />
                <h3>Ohh! </h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/'>Back Home</Link>
            </div>
        )
    }

    return (
        <div id='error'>
            <h3>Something went wrong!!!</h3>
        </div>
    )
}

export default Error
