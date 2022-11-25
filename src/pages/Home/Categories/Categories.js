import React, { useEffect, useState } from 'react';
import Title from '../../../Components/Title/Title';
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
        <div className='my-20 max-w-[1200px] mx-auto'>
            <Title>Categories</Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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