import React from 'react';
import { Link } from 'react-router-dom';

const CategorySingleItem = ({ categoryItem }) => {
    const { _id, productImg, postedTime, productname, sellerName, originalPrice, resalePrice, usedFor, productDescription, location } = categoryItem;

    return (
        <div className='md:flex justify-between items-center border border-accent rounded-md mb-5 p-2 hover:shadow-lg relative'>
            <div className="badge absolute top-0 right-0">{postedTime}</div>
            <div className='w-full md:w-2/5'>
                <img className='w-2/3 mx-auto' src={productImg} alt="" />
            </div>
            <div className='w-full md:w-3/5'>
                <h4 className='text-xl md:text-2xl font-bold my-3'>{productname}</h4>
                <h4 className='text:lg md:text-xl font-bold mb-1'>Seller: {sellerName}</h4>
                <h4 className='text:lg md:text-xl font-bold mb-1'>Location: {location}</h4>
                <h4 className='text:lg md:text-xl font-bold mb-1'>Used: {usedFor}</h4>
                <p className='text-lg font-semibold'>Buying Price: <span className='font-bold text-accent'>{originalPrice}Tk</span></p>
                <p className='text-lg font-semibold'>Selling Price: <span className='font-bold text-accent'>{resalePrice}Tk</span></p>
                <p className='text-lg text-black'>
                    {productDescription.length > 200 ?
                        <>{productDescription.slice(0, 200)}...</> :
                        productDescription}</p>
                <div className='w-full flex justify-end'>
                    <Link to={_id}><button className='btn bg-accent border-0 text-lg font-semibold w-40 hover:pb-2'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategorySingleItem;