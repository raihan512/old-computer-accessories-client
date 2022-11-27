import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import RecentlyAddedProducts from '../RecentlyAddedProducts/RecentlyAddedProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <RecentlyAddedProducts></RecentlyAddedProducts>
        </div>
    );
};

export default Home;