import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { _id, img, desc, title } = category;
    return (
        <div className="card w-80 md:w-96 bg-base-100 border pt-10  hover:shadow-xl mx-auto">
            <figure><img src={img} alt={title} className='h-20 md:h-40' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <Link to={`category/${_id}`}>
                        <button className="btn btn-primary">See all {`${title}`}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;