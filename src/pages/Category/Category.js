import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './CategorySingleItem/BookingModal/BookingModal';
import CategorySingleItem from './CategorySingleItem/CategorySingleItem';

const Category = () => {
    const categoryItems = useLoaderData();
    const [booking, setBooking] = useState(null);

    return (
        <div className='min-h-screen'>
            <h3 className='text-3xl font-bold text-center my-10'>
                {
                    categoryItems.length > 0 ?
                        <>{categoryItems.length} Items Available</> :
                        <>No Items Available</>
                }
            </h3>
            <div className='max-w-[1200PX] mx-auto px-10'>
                {
                    categoryItems.map(categoryItem => <CategorySingleItem
                        key={categoryItem._id}
                        categoryItem={categoryItem}
                        setBooking={setBooking}
                    ></CategorySingleItem>)
                }
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