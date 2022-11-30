import React from 'react';
import { Link } from 'react-router-dom';

const SingleBooking = ({ userBooking }) => {
    const { meetingLocation, productName, resalePrice, _id } = userBooking;
    return (
        <div className='border border-accent rounded-md p-5 m-5'>
            <h4 className='text-xl font-semibold'>{productName}</h4>
            <p className='text-lg font-semibold'>Location: {meetingLocation}</p>
            <p className='text-lg font-semibold'>Price: {resalePrice}</p>
            <Link to={`/payment/${_id}`}><button className='bg-accent py-2 px-8 rounded-md font-semibold text-white'>Pay</button></Link>
        </div>
    );
};

export default SingleBooking;