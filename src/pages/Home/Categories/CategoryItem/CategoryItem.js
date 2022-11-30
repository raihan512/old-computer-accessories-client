import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { _id, img, desc, title } = category;
    return (
        <div className="border p-3 rounded-md">
            <figure><img src={img} alt={title} className='h-20 md:h-40' /></figure>
            <div className="">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <button className="bg-accent py-2 w-full text-white font-semibold btn-primary">
                    <Link to={`category/${_id}`}> See all {`${title}`}</Link>
                </button>
            </div>
        </div>
    );
};

export default CategoryItem;