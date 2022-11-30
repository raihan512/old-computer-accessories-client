import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem/CategoryItem';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    // Load categories lists from database
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2 className='text-center text-xl md:text-4xl text-black uppercase font-bold my-5 md:my-10'>Advertised Item</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    categories.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                    ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default Categories;