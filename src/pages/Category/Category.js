import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategorySingleItem from './CategorySingleItem/CategorySingleItem';

const Category = () => {
    const categoryItems = useLoaderData()

    return (
        <div>
            <h3 className='text-3xl font-bold text-center my-10'>
                {
                    categoryItems.length > 0 ?
                        <>{categoryItems.length} Items Available</> :
                        <>No Items Available</>
                }
            </h3>
            <div className='max-w-[1200PX] mx-auto'>
                {
                    categoryItems.map(categoryItem => <CategorySingleItem
                        key={categoryItem._id}
                        categoryItem={categoryItem}
                    ></CategorySingleItem>)
                }
            </div>
        </div>
    );
};

export default Category;    