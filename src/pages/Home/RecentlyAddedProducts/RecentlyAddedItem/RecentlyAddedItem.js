import React from 'react';
import { Link } from 'react-router-dom';


const RecentlyAddedItem = ({ product }) => {
    const { resalePrice, productname, productImg, _id } = product;
    return (
        <div className='border rounded-md p-5 mx-5'>
            <img src={productImg} alt={productname} className="h-40 mx-auto" />
            <p className='text-lg font-semibold'><strong>{productname}</strong></p>
            <p className='font-bold mb-2'><strong>Price: {resalePrice}</strong></p>
            <Link to={`/productdetails/${_id}`}><button className='btn bg-accent border-0 text-lg font-semibold w-40'>See Details</button></Link>
        </div>
    );
};

export default RecentlyAddedItem;