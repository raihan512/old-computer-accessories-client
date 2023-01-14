import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import OurShop from '../OurShop/OurShop';
import RecentlyAddedProducts from '../RecentlyAddedProducts/RecentlyAddedProducts';
import SellerBuyer from '../SellerBuyer/SellerBuyer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1200px] mx-auto'>
                <div className='mx-5'>
                    <Advertise></Advertise>
                    <Categories></Categories>
                    <RecentlyAddedProducts></RecentlyAddedProducts>
                    <Brands></Brands>
                    <SellerBuyer></SellerBuyer>
                    <OurShop></OurShop>
                </div>
            </div>
        </div>
    );
};

export default Home;