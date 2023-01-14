import React from 'react';

import amd from '../../../images/brands/amd.png';
import antec from '../../../images/brands/antec.png';
import asrock from '../../../images/brands/asrock.png';
import asus from '../../../images/brands/asus.png';
import corsair from '../../../images/brands/corsair.png';
import gamdias from '../../../images/brands/gamdias.png';
import gigabyte from '../../../images/brands/gigabyte.png';
import intel from '../../../images/brands/intel.png';
import samsung from '../../../images/brands/samsung.png';
import seagate from '../../../images/brands/seagate.png';

const Brands = () => {
    const brands = [
        {
            _id: 1,
            img: amd,
        },
        {
            _id: 2,
            img: antec,
        },
        {
            _id: 3,
            img: asrock,
        },
        {
            _id: 4,
            img: asus,
        },
        {
            _id: 5,
            img: corsair,
        },
        {
            _id: 6,
            img: gamdias,
        },
        {
            _id: 7,
            img: gigabyte,
        },
        {
            _id: 8,
            img: intel,
        },
        {
            _id: 9,
            img: samsung,
        },
        {
            _id: 10,
            img: seagate,
        }
    ]
    return (
        <section className='max-w-[1200px] mx-auto'>
            <div>
                <h2 className='text-center text-xl md:text-2xl text-black uppercase font-bold my-5 md:mt-10'>Our Brands</h2>
            </div>
            {/* Brands Container */}
            <div className='flex flex-wrap justify-center'>
                {
                    brands.map(brand => <div
                        key={brand._id}
                        brand={brand}
                        className="flex justify-center items-center m-2"
                    >
                        <img className='h-8 md:h-14 hover:shadow-lg py-2 px-5 bg-slate-200 rounded-md' src={brand.img} alt="" />
                    </div>)
                }
            </div>
        </section>
    );
};

export default Brands;