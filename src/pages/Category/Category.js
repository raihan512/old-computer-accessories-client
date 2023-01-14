import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../shared/ProductCard/ProductCard';
import BookingModal from './BookingModal/BookingModal';

const Category = () => {
    const products = useLoaderData();
    const [booking, setBooking] = useState(null);

    return (
        <div className='min-h-screen'>
            <h3 className='text-3xl font-bold text-center my-10'>
                {
                    products.length > 0 ?
                        <>{products.length} Items Available</> :
                        <>No Items Available</>
                }
            </h3>
            <div className='max-w-[1200PX] mx-auto px-10'>
                {/* <div className='flex flex-wrap justify-between'> */}
                <div className='grid grid-cols-5 gap-5 justify-items-center mb-5'>
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                            setBooking={setBooking}
                        ></ProductCard>)
                    }
                </div>
            </div>
            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default Category;    