import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import RecentlyAddedProducts from '../RecentlyAddedProducts/RecentlyAddedProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1200px] mx-auto'>
                <div className='mx-5'>
                    <Advertise></Advertise>
                    <Categories></Categories>
                    <RecentlyAddedProducts></RecentlyAddedProducts>
                </div>
            </div>
        </div>
    );
};

export default Home;