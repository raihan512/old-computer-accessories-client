import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseItem = ({ advertisedProduct }) => {
    const { productImg, productname, resalePrice, usedFor, _id } = advertisedProduct;
    return (
        <div className="card w-96 bg-base-100 border border-accent hover:shadow-xl relative mx-auto mb-5">
            <div className="badge badge-secondary absolute top-2 right-2">NEW</div>
            <figure><img src={productImg} alt={productname} className='h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productname}
                </h2>
                <p><strong>Used: {usedFor}</strong></p>
                <p><strong>Price: {resalePrice}TK</strong></p>
                <Link to={`/productdetails/${_id}`}><button className='btn bg-accent border-0 text-lg font-semibold w-40'>See Details</button></Link>
            </div>
        </div>
    );
};

export default AdvertiseItem;