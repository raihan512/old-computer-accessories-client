import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem/CategoryItem';

const Categories = () => {
    // Load categories lists from database
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://pcparts-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <section>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl md:text-2xl text-black uppercase font-bold my-5 md:my-10'>All Categories</h2>
                <Link to='/allproducts'>See All</Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10'>
                {
                    categories.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                    ></CategoryItem>)
                }
            </div>
        </section>
    );
};

export default Categories;