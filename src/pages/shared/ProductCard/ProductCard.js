import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiCheckCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';


const ProductCard = ({ product, booking, setBooking }) => {
    const { _id, productImg, postedTime, productname, sellerName, originalPrice, resalePrice, usedFor, productDescription, location, sellerEmail } = product;

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
        <div className='w-[350px] border border-accent rounded-md mb-5 p-2 hover:shadow-lg relative'>
            <div className="badge absolute top-0 right-0">{postedTime}</div>
            <img className='h-40 mx-auto mt-5' src={productImg} alt="" />
            <div>
                <h4 className='text-sm md:text-md font-bold my-3'>{productname}</h4>
                <h4 className='text-sm md:text-md font-bold mb-1 flex items-center'>Seller: {sellerName}
                    <span>{isVerified ? <div className='flex items-center'><HiCheckCircle className='text-blue-500 ml-2' />
                        <label htmlFor="book-now-modal" className="badge cursor-pointer ml-1" onClick={() => setBooking(product)}>Book Now</label>
                    </div> : ''}</span>
                </h4>
                <h4 className='text-md font-semibold mb-1'>Location: {location}</h4>
                <h4 className='text-md font-semibold mb-1'>Used: {usedFor}</h4>
                <p className='text-md'>Buying Price: <span className='text-accent'>{originalPrice}Tk</span></p>
                <p className='text-md'>Selling Price: <span className='text-accent'>{resalePrice}Tk</span></p>
                <p className='text-sm text-black my-2'>
                    {productDescription.length > 50 ?
                        <><strong>Desc:</strong> {productDescription.slice(0, 50)}...</> :
                        productDescription}</p>
                <Link to={`/productdetails/${_id}`}><button className='rounded-sm bg-accent border-0 text-lg text-white font-semibold  w-full'>See Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;