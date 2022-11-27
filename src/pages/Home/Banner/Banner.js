import React from 'react';
import BannerItem from './BannerItem/BannerItem';

const banners = [
    {
        id: 1,
        img: 'https://i.ibb.co/x2dQd56/z-Mq-HIN6-OM0-Sl49-Y9-Hcvib-LIzo-Pm-LQJtre2-Ip-OTBV.webp',
        prev: 3,
        next: 2,
    },
    {
        id: 2,
        img: 'https://i.ibb.co/Jx32VGQ/Js5-Icjmh3-FPKo-ICh-E4j-Ztd73wp24-Lb-MGxn-Vw-FL2n.webp',
        prev: 1,
        next: 3,
    },
    {
        id: 3,
        img: 'https://i.ibb.co/vqnw60R/cm-Qitt-Utx-XCDHIk6y-CPa-Nv-H4jz5-TWGtat-EI5ag2j.webp',
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