import React from 'react';


const RecentlyAddedItem = ({ product }) => {
    const { resalePrice, productname, productImg } = product;
    return (
        <div className='border rounded-md p-5 mx-5'>
            <img src={productImg} alt={productname} className="h-40 mx-auto" />
            <p className='text-lg font-semibold'>{productname}</p>
            <p className='font-bold text-accent'>{resalePrice}</p>
        </div>
    );
};

export default RecentlyAddedItem;