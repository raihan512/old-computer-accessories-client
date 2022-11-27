import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const Navbar = () => {
    const { user, signout } = useContext(AuthProvider);
    const navigate = useNavigate();

    const email = user?.email;
    const { data: userCategory = [], isLoading } = useQuery({
        queryKey: ['userCategory', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${email}`)
            const data = await res.json();
            return data;
        }
    })


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <>
            {
                user && <li><Link to='/'>Dashboard</Link></li>
            }
        </>
        <>
            {
                userCategory.category === 'seller' && <><li><Link to='/addproducts'>Add Product</Link></li>  <li><Link to='/myproducts'>My Product</Link></li></>
            }
        </>

    </>

    const handleLogut = () => {
        signout()
            .then(res => {
                navigate('/signin')

            })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100 sticky top-0 w-100 z-10 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">PcParts</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        // if user available then show SignOut button
                        <>
                            <button className='btn' onClick={handleLogut}>SignOut</button>
                        </> :
                        // if user is not available then show SignIn button
                        <>
                            <button className='btn'><Link to='/signin'>SignIn</Link></button>
                        </>
                }

            </div>
        </div>


    );
};

export default Navbar;