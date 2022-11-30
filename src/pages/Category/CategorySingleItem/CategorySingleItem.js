import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiCheckCircle } from "react-icons/hi";

const CategorySingleItem = ({ categoryItem, setBooking }) => {
    const { _id, productImg, postedTime, productname, sellerName, originalPrice, resalePrice, usedFor, productDescription, location, sellerEmail } = categoryItem;

    // Load all users from database
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    // Findout Verified Seller
    const thisSeller = users.find(user => user.email === sellerEmail);
    const isVerified = thisSeller?.userVerified === true;

    return (
        <div className='md:flex justify-between items-center border border-accent rounded-md mb-5 p-2 hover:shadow-lg relative'>
            <div className="badge absolute top-0 right-0">{postedTime}</div>
            <div className='w-full md:w-2/5'>
                <img className='w-2/3 mx-auto' src={productImg} alt="" />
            </div>
            <div className='w-full md:w-3/5'>
                <h4 className='text-xl md:text-2xl font-bold my-3'>{productname}</h4>
                <h4 className='text:lg md:text-xl font-bold mb-1 flex items-center'>Seller: {sellerName}
                    <span>{isVerified ? <div className='flex items-center'><HiCheckCircle className='text-blue-500 ml-2' />
                        <label htmlFor="book-now-modal" className="badge" onClick={() => setBooking(categoryItem)}>Book Now</label>
                    </div> : ''}</span>
                </h4>
                <h4 className='text:lg md:text-xl font-bold mb-1'>Location: {location}</h4>
                <h4 className='text:lg md:text-xl font-bold mb-1'>Used: {usedFor}</h4>
                <p className='text-lg font-semibold'>Buying Price: <span className='font-bold text-accent'>{originalPrice}Tk</span></p>
                <p className='text-lg font-semibold'>Selling Price: <span className='font-bold text-accent'>{resalePrice}Tk</span></p>
                <p className='text-lg text-black'>
                    {productDescription.length > 200 ?
                        <>{productDescription.slice(0, 200)}...</> :
                        productDescription}</p>
                <div className='w-full flex justify-end'>
                    <Link to={`/productdetails/${_id}`}><button className='btn bg-accent border-0 text-lg font-semibold w-40'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategorySingleItem;