import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseItem from './AdvertiseItem/AdvertiseItem';

const Advertise = () => {

    const { data: advertisedProducts = [] } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products?advertise=true');
            const data = await res.json();
            return data;
        }
    })
    if (advertisedProducts.length < 1) {
        return '';
    }
    return (
        <div className='max-w-[1200px] mx-auto my-20'>
            <h2 className='text-center text-5xl text-black uppercase font-bold my-10'>Advertised Item</h2>
            <div className='md:flex flex-wrap'>
                {
                    advertisedProducts.map(advertisedProduct => <AdvertiseItem
                        key={advertisedProduct._id}
                        advertisedProduct={advertisedProduct}
                    ></AdvertiseItem>)
                }
            </div>
        </div>
    );
};

export default Advertise;