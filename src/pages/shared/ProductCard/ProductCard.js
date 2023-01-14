import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { } from './ProductCard.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';


const ProductCard = ({ product, booking, setBooking }) => {
    const { user } = useContext(AuthProvider);
    const { _id, productImg, productname, resalePrice, location, sellerEmail } = product;

    // Load all users from database
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://pcparts-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    // Findout Verified Seller
    const thisSeller = users.find(user => user.email === sellerEmail);
    const isVerified = thisSeller?.userVerified === true;
    return (
        <div className='product-card w-[220px] border box-border relative rounded-md shadow-xl overflow-hidden'>
            {/* Product image */}
            <div className='bg-slate-50 mb-1'>
                <Link to={`/productdetails/${_id}`}><img src={productImg} className="h-40 p-5 mx-auto transition-all hover:rotate-12" alt="" /></Link>
            </div>
            {/* Product content */}
            <div className='p-2 pt-0'>
                <p className='flex items-center text-xs'><FaMapMarkerAlt className='mr-0.5' />{location}</p>
                <h4 className='text-base font-bold truncate text-ellipsis my-1'>{productname}</h4>
                <p className='text-sm'><strong>Price: ${resalePrice}</strong></p>
            </div>
            {/* Product Buttons */}
            <div className='flex justify-between items-center'>
                <button className='w-6/12 py-1 text-white font-semibold  bg-accent'><Link to={`/productdetails/${_id}`}>See Details</Link></button>
                {
                    isVerified && user ?
                        <label className='w-6/12 py-1  text-white font-semibold bg-lime-500 text-center cursor-pointer' htmlFor="book-now-modal" onClick={() => setBooking(product)}>Book Now</label>
                        : <label className='w-6/12 py-1  text-white font-semibold bg-red-500 text-center cursor-pointer'>{user?.uid ? 'Book Now' : <Link to='/login'>Book Now</Link>}</label>
                }

            </div>
            {
                isVerified ?
                    <span className='text-xs bg-green-500 py-1 px-3 rounded-sm absolute top-0 right-0 text-white font-serif'>Verified Seller</span> :
                    <span className='text-xs bg-red-500 py-1 px-3 rounded-sm absolute top-0 right-0 text-white font-serif'>Not Verified</span>
            }
        </div >
    );
};

export default ProductCard;