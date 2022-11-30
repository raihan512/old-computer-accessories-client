import React from 'react';

const MySingleProduct = ({ product, handleDeleteProduct, handleAdvertiseProduct }) => {
    const { productImg, productname, originalPrice, resalePrice, location, phone } = product;
    console.log(product);

    return (
        <div className="card w-80 md:w-96 bg-base-100 border rounded-md hover:shadow-xl relative mx-auto">
            <div className="badge badge-secondary absolute top-2 right-2">NEW</div>
            <figure><img src={productImg} alt={productname} className='h-40' /></figure>
            <div className="p-2">
                <h2 className="truncate text-lg font-bold">
                    {productname}...
                </h2>
                <p><strong>Buying Price: {originalPrice}TK</strong></p>
                <p><strong>Selling Price: {resalePrice}TK</strong></p>
                <p><strong>Location: {location}TK</strong></p>
                <p><strong>Phone: {phone}TK</strong></p>
                <div className="flex">
                    <div className="w-2/4 py-2 border-0  text-lg font-semibold bg-error rounded-l-md text-white pl-5" onClick={() => handleDeleteProduct(product._id)}>Delete</div>
                    {
                        <div className="w-2/4 py-2 border-0  text-lg font-semibold bg-green-600 rounded-r-md text-white pl-5" onClick={() => handleAdvertiseProduct(product._id)}>{product.advertise ? 'Advertised' : 'Advertise'}</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MySingleProduct;