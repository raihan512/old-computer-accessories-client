import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    const category = useLoaderData()
    const { productname, productPrice, purchasedYear, productDescription, productCondition, phone, location } = category

    return (
        <div>
            <h3 className='text-3xl font-bold uppercase'>We have total {category.length} items in this category</h3>
        </div>
    );
};

export default Category;    