import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../Category/BookingModal/BookingModal';
import ProductCard from '../../shared/ProductCard/ProductCard';

const Advertise = () => {
    const [booking, setBooking] = useState(null);

    const { data: advertisedProducts = [] } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch('https://pcparts-server.vercel.app/products?advertise=true');
            const data = await res.json();
            return data;
        }
    })
    if (advertisedProducts.length < 1) {
        return '';
    }
    return (
        <div>
            <h2 className='text-center text-xl md:text-2xl text-black uppercase font-bold my-5 md:my-10'>Advertise Products</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center mb-5'>
                {
                    advertisedProducts.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></ProductCard>)
                }
                {
                    booking &&
                    <BookingModal
                        booking={booking}
                        setBooking={setBooking}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default Advertise;