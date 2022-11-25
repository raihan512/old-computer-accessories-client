import React from 'react';
import BannerItem from './BannerItem/BannerItem';

const banners = [
    {
        id: 1,
        img: 'https://i.ibb.co/bshH9Sq/7-reasons-why-you-should-learn-python.jpg',
        prev: 3,
        next: 2,
    },
    {
        id: 2,
        img: 'https://i.ibb.co/4sbzr4j/apa-itu-javascript.png',
        prev: 1,
        next: 3,
    },
    {
        id: 3,
        img: 'https://i.ibb.co/z8MnrkT/meta-image.png',
        prev: 2,
        next: 1,
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                banners.map(banner => <BannerItem
                    key={banner.id}
                    banner={banner}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;