import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg'
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';
import { useState } from 'react';

const Navbar = () => {
    const { user } = useContext(AuthProvider);
    const [dropMenu, setDropMenu] = useState(false)
    const email = user?.email;

    // Load user category by email
    const { data: userCategory = [], refetch } = useQuery({
        queryKey: ['userCategory', email],
        queryFn: async () => {
            const res = await fetch(`https://pcparts-server.vercel.app/users?email=${email}`)
            const data = await res.json();
            refetch();
            return data;
        }
    })
    // Menu items container
    const menuItems = <div className='text-black font-medium uppercase text-sm md:text-base flex flex-col md:flex-row'>
        <Link className='hover:text-amber-600 md:ml-5 py-2 px-8 md:p-0 hover:bg-slate-50 md:hover:bg-transparent' onClick={() => setDropMenu(false)} to='/'>Home</Link>
        {
            user &&
            <Link className='hover:text-amber-600 md:ml-5 py-2 px-8 md:p-0 hover:bg-slate-50 md:hover:bg-transparent' to={`/dashboard/${userCategory?.category}`}>Dashboard</Link>
        }
        {/* Buyer menu items*/}
        {userCategory.category === 'buyer' &&
            <Link className='hover:text-amber-600 md:ml-5 py-2 px-8 md:p-0 hover:bg-slate-50 md:hover:bg-transparent ' onClick={() => setDropMenu(false)} to='/mybookings'>My&nbsp;Bookings</Link>
        }
        {/* Seller menu items */}
        {userCategory.category === 'seller' &&
            <>
                <Link className='hover:text-amber-600 md:ml-5 py-2 px-8 md:p-0 hover:bg-slate-50 md:hover:bg-transparent' onClick={() => setDropMenu(false)} to='/addproducts'>Add&nbsp;Product</Link>
                <Link className='hover:text-amber-600 md:ml-5 py-2 px-8 md:p-0 hover:bg-slate-50 md:hover:bg-transparent' onClick={() => setDropMenu(false)} to='/myproducts'>My&nbsp;Product</Link>
            </>
        }
        <Link className='hover:text-amber-600 md:ml-5 py-2 px-8 md:p-0 hover:bg-slate-50 md:hover:bg-transparent' onClick={() => setDropMenu(false)} to='/blog'>Blog</Link>
    </div>

    return (
        <nav className='bg-slate-200 py-3 sticky top-0 w-100 z-10 shadow-md'>
            <div className='mx-5 flex justify-between items-center'>
                {/* Logo */}
                <div>
                    <p className='text-xl font-bold'><Link onClick={() => setDropMenu(false)} to='/'>PCPARTS</Link></p>
                </div>
                {/* Desktop Menu */}
                <div className='hidden md:block items-center'>
                    {menuItems}
                </div>
                {/* Mobile menu */}
                <div className='md:hidden relative'>
                    <button onClick={() => setDropMenu(!dropMenu)}>
                        <CgMenuGridR className='text-xl cursor-pointer' />
                    </button>
                    {
                        dropMenu && <div className='absolute top-5 right-0 bg-slate-400 rounded-md overflow-hidden'>{menuItems}</div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;