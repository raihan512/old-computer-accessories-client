import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/Authprovider/AuthContext';
import useAdmin from '../../useAdmin/useAdmin';
import AddProducts from '../SellerPages/AddProducts/AddProducts';
import MyProducts from '../SellerPages/MyProducts/MyProducts';

const Dashboard = () => {
    const { user } = useContext(AuthProvider);
    const [isAdmin] = useAdmin(user.email);
    const email = user.email;
    // Find user By Email
    const { data: userInfo = [] } = useQuery({
        queryKey: ['userInfo', email],
        queryFn: async () => {
            const res = await fetch(`https://pcparts-server.vercel.app/users?email=${email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='max-w-[1200px] mx-auto my-10'>
            {/* Seller Info */}
            {
                userInfo.category === 'seller' && <>
                    <h3 className='text-2xl text-center font-semibold'>Welcome to your dashboard Mr/Mrs <strong>{user.displayName}</strong></h3>
                    <AddProducts></AddProducts>
                    <MyProducts></MyProducts>
                </>
            }
            {/* Buyer Info */}
            {
                userInfo.category === 'buyer' && <>
                    <h3 className='text-2xl text-center font-semibold'>Welcome to your dashboard Mr/Mrs <strong>{user.displayName}</strong></h3>
                </>
            }
            {/* Admin Info */}
            {
                isAdmin && <>
                    <div className='md:flex justify-center'>
                        <p className='text-xl md:text-2xl font-bold text-white bg-accent py-3 px-5 md:rounded-l-lg'><Link to='/dashboard/admin/allsellers'>All Sellers</Link></p>
                        <p className='text-xl md:text-2xl font-bold text-white bg-accent py-3 px-5 border-top border-bottom md:border-l md:border-r'><Link to='/dashboard/admin/allbuyers'>All Buyers</Link></p>
                        <p className='text-xl md:text-2xl font-bold text-white bg-accent py-3 px-5 md:rounded-r-lg'><Link to='/dashboard/admin/reporteditems'>Reported Items</Link></p>
                    </div>
                </>
            }
        </div>
    );


};

export default Dashboard;