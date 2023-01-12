import React, { useContext } from 'react';
import { BsPhone } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, signout } = useContext(AuthProvider);
    // Logout function
    const handleLogut = () => {
        signout()
            .then(res => {
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    return (
        <header className='bg-neutral py-2'>
            <div className='mx-5 flex justify-between items-center text-sm md:text-base text-slate-300'>
                {/* Left content */}
                <div className='flex items-center'>
                    <span className=''><BsPhone /></span>
                    <p className='ml-1 md:ml-3 cursor-pointer hover:text-accent'>+8801734768772</p>
                </div>
                {/* Right content */}
                <div className='flex items-center'>
                    {
                        user ?
                            <>
                                {user.photoURL ?
                                    <img src={user?.photoURL} className="h-6 w-6 rounded-full" alt="" /> :
                                    <p className='bg-accent text-white h-6 w-6 rounded-full flex justify-center items-center'>{user?.displayName && user?.displayName.slice(0, 1)}</p>}
                                <p className='ml-3 cursor-pointer hover:text-red-400' onClick={handleLogut}>Logout</p>
                            </>
                            : <>
                                <BiUserCircle className='hidden sm:block text-xl md:text-2xl' />
                                <p className='ml-1 md:ml-3 hover:text-accent'><Link to='login'>Login</Link></p>
                                <p className='ml-1 md:ml-3'>or</p>
                                <p className='ml-1 md:ml-3 hover:text-accent'><Link to='register'>Register</Link></p>
                            </>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;