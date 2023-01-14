import React from 'react';
import { Link } from 'react-router-dom';

const MySingleProduct = ({ product, handleDeleteProduct, handleAdvertiseProduct }) => {
    const { _id, productImg, productname, resalePrice } = product;

    return (
        <div className='product-card w-[220px] border box-border relative rounded-md shadow-xl overflow-hidden'>
            {/* Product image */}
            <div className='bg-slate-50 mb-1'>
                <Link to={`/productdetails/${_id}`}><img src={productImg} className="h-40 p-5 mx-auto transition-all hover:rotate-12" alt="" /></Link>
            </div>
            {/* Product content */}
            <div className='p-2 pt-0'>
                <h4 className='text-base font-bold truncate text-ellipsis my-1'>{productname}</h4>
                <p className='text-sm'><strong>Price: ${resalePrice}</strong></p>
            </div>
            {/* Product Buttons */}
            <div className='flex justify-between items-center'>
                <button className='w-6/12 py-1 text-white font-semibold  bg-red-500' onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                <button className='w-6/12 py-1 text-white font-semibold  bg-green-500' onClick={() => handleAdvertiseProduct(product._id)}>{product.advertise ? 'Advertised' : 'Advertise'}</button>
            </div>
        </div>
    );
};

export default MySingleProduct;