import React from 'react';

const MySingleProduct = ({ product, handleDeleteProduct, handleAdvertiseProduct }) => {
    const { productImg, productname, resalePrice } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl relative mx-auto">
            <div className="badge badge-secondary absolute top-2 right-2">NEW</div>
            <figure><img src={productImg} alt={productname} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productname}
                </h2>
                <p>Price: {resalePrice}TK</p>
                <div className="card-actions">
                    <div className="btn border-0 px-8 text-lg bg-error" onClick={() => handleDeleteProduct(product._id)}>Delete</div>
                    {
                        product.advertise ?
                            <><div className="btn border-0 px-8 text-lg bg-green-600" >Advertised</div></> :
                            <div className="btn border-0 px-8 text-lg bg-green-600" onClick={() => handleAdvertiseProduct(product._id)}>Advertise</div>

                    }
                </div>
            </div>
        </div>
    );
};

export default MySingleProduct;