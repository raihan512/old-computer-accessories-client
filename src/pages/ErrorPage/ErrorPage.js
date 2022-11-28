import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h3 className='text-8xl font-bold text-red-600'><strong>404</strong></h3>
            <p className='text-2xl'>Error! This Page is not Available</p>
            <button className='bg-accent rounded-lg my-5 text-xl text-white font-semibold py-3 px-8'><Link to='/'>Return Home</Link></button>
        </div>
    );
};

export default ErrorPage;