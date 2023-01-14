import React from 'react';
import { FaMoneyBillAlt, FaLuggageCart } from 'react-icons/fa'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FiArrowRightCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const SellerBuyer = () => {
    const { user } = useContext(AuthProvider);
    return (
        <section className='max-w-[1200px] mx-auto'>
            <div>
                <h2 className='text-center text-xl md:text-2xl text-black uppercase font-bold my-5 md:my-10'>What you do</h2>
            </div>
            <div className='md:flex justify-between lg:w-10/12 mx-auto my-10'>
                {/* Sell Your Product  */}
                <div className='md:w-6/12 sm:flex justify-between items-center bg-slate-50 p-3 md:p-8 md:rounded-l-md'>
                    <FaMoneyBillAlt className='text-8xl text-green-300' />
                    <div className='w-8/12'>
                        <h5 className='text-xl font-semibold mb-3'>Start earn money</h5>
                        <p>
                            Do you have something to sell?
                            Post your first ad and earn money!
                        </p>
                        <Link className='mt-3 flex items-center text-lg bg-yellow-400 py-2 px-3 md:px-5 rounded-full text-black' to='/addproducts'><AiFillPlusCircle className='text-xl mr-2' />{user?.uid ? 'Add Product' : <Link to='/login'>Add Product</Link>}</Link>
                    </div>
                </div>
                {/* Know More */}
                <div className='md:w-6/12 sm:flex justify-between items-center bg-slate-50 p-3 md:p-8 md:rounded-r-md md:border-l'>
                    <FaLuggageCart className='text-8xl text-green-300' />
                    <div className='w-8/12'>
                        <h5 className='text-xl font-semibold mb-3'>Buy product</h5>
                        <p>
                            Buy product from verified seller. Browse all product and book.
                        </p>
                        <Link className='mt-3 flex items-center text-lg bg-blue-400 py-2 px-3 md:px-5 rounded-full text-white' to='/allproducts'><FiArrowRightCircle className='text-xl mr-2' />See all</Link>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default SellerBuyer;