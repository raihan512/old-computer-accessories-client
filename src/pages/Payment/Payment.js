// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm/CheckoutForm';

// const stripePromise = loadStripe('pk_test_51M9ivWKSFjSDGG4pOl7Ro5M4v0pOyAo4r8pINYfcramQkaPXbohevU1F85sesKWN9WCQF82BZZIbJwnia50SX1YD00ZdoirjY7');

const Payment = () => {
    const bookedItem = useLoaderData();
    const booking = bookedItem;
    return (
        <div className='max-w-[800px] mx-auto'>
            <h2 className='text-center text-xl md:text-4xl text-black uppercase font-bold my-5 md:my-10'>Payment</h2>
            <div className='text-center'>
                <h3 className='text-xl font-bold'>{booking.productName}</h3>
                <p><strong>Price: {booking.resalePrice}</strong></p>
            </div>
            <div className='w-96 my-12 mx-auto'>
                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements> */}
            </div>
        </div>
    );
};

export default Payment;