import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Category/BookingModal/BookingModal';
import ProductCard from '../shared/ProductCard/ProductCard';

const AllProducts = () => {
    const allProducts = useLoaderData();
    const [booking, setBooking] = useState(null);
    return (
        <section className='max-w-[1200px] mx-auto'>
            <div>
                <h2 className='text-center text-xl md:text-2xl text-black uppercase font-bold my-5 md:my-10'>All Products</h2>
            </div>
            {/* Products container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center mb-5'>
                {
                    allProducts.map(product => <ProductCard
                        key={product._id}
                        booking={booking}
                        setBooking={setBooking}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </section>
    );
};

export default AllProducts;