// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const productInfo = useLoaderData();
    const { location, originalPrice, phone, postedTime, productCondition, productDescription, productImg, productname, purchasedYear, resalePrice, sellerEmail, sellerName, usedFor } = productInfo;
    // Load all users from database
    // const { data: users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('https://pcparts-server.vercel.app/users');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    return (
        <div className='max-w-[1200px] mx-auto mt-10 mb-40'>
            <h3 className='text-xl md:text-2xl lg:text-4xl font-semibold mb-3'><strong>{productname}</strong></h3>
            <p className='text-lg font-semibold mb-3'>Posted at {postedTime}</p>
            <div className='md:flex justify-between items-center'>
                <div className='md:w-2/5'>
                    <img src={productImg} className='md:h-96 mx-auto' alt="" />
                </div>
                <div className='m-3 md:w-3/5'>
                    <h4 className='text-xl md:text-2xl font-bold mb-3'>Details</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Seller Name:</strong></td>
                                <td><strong>{sellerName}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Seller Email:</strong></td>
                                <td><strong>{sellerEmail}</strong></td>
                            </tr>
                            <tr>
                                <td className='pb-3'><strong>Seller Phone:</strong></td>
                                <td className='pb-3'><strong>{phone}</strong></td>
                            </tr>
                            <tr className='text-lg font-semibold'>
                                <td>Location</td>
                                <td className='pl-5 capitalize'>{location}</td>
                            </tr>
                            <tr className='text-lg font-semibold'>
                                <td>Original Price</td>
                                <td className='pl-5'>{originalPrice}</td>
                            </tr>
                            <tr className='text-lg font-semibold'>
                                <td>Resale Price</td>
                                <td className='pl-5'>{resalePrice}</td>
                            </tr>
                            <tr className='text-lg font-semibold'>
                                <td>Purchased Year</td>
                                <td className='pl-5'>{purchasedYear}</td>
                            </tr>
                            <tr className='text-lg font-semibold'>
                                <td>Used Price</td>
                                <td className='pl-5'>{usedFor}</td>
                            </tr>
                            <tr className='text-lg font-semibold'>
                                <td>Condition</td>
                                <td className='pl-5 capitalize'>{productCondition}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h4 className='text-xl md:text-2xl font-bold mb-3'>Description</h4>
                <p className='text-md text-black'>{productDescription}</p>
            </div>
        </div>
    );
};

export default ProductDetails;