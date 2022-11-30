import React from 'react';
import { Link } from 'react-router-dom';


const RecentlyAddedItem = ({ product }) => {
    const { resalePrice, productname, productImg, _id } = product;
    return (
        <div className="border p-3 rounded-md mx-5">
            <figure><img src={productImg} alt={productname} className='h-20 md:h-40' /></figure>
            <div className="">
                <h2 className="text-lg font-bold truncate">{productname}...</h2>
                <h4 className='text-md my-2'><strong>{resalePrice} Tk</strong></h4>
                <button className="bg-accent py-2 w-full text-white font-semibold btn-primary">
                    <Link to={`/productdetails/${_id}`}>See Details</Link>
                </button>
            </div>
        </div>
    );
};

export default RecentlyAddedItem;