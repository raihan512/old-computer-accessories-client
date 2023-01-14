import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { _id, img, title } = category;
    return (
        <div className="border hover:border-accent hover:shadow-md rounded-md">
            <Link to={`category/${_id}`}><img src={img} alt={title} className='h-32 mx-auto py-5 px-2 transition-all hover:rotate-12' /></Link>
        </div>
    );
};

export default CategoryItem;