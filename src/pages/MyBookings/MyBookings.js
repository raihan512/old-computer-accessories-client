import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../Contexts/Authprovider/AuthContext';
import SingleBooking from './SingleBooking/SingleBooking';

const MyBookings = () => {
    const { user } = useContext(AuthProvider);
    const { data: userBookings = [] } = useQuery({
        queryKey: ['userBookings'],
        queryFn: async () => {
            const res = await fetch(`https://pcparts-server.vercel.app/bookings?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='max-w-[800px] mx-auto'>

            <h2 className='text-center text-xl md:text-4xl text-black uppercase font-bold my-5 md:my-10'>My Bookings</h2>

            {
                userBookings.map(userBooking => <SingleBooking
                    key={userBooking._id}
                    userBooking={userBooking}
                ></SingleBooking>)
            }
        </div>
    );
};

export default MyBookings;