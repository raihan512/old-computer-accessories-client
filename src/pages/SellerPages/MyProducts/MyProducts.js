import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';
import MySingleProduct from './MySingleProduct/MySingleProduct';

const MyProducts = () => {
    const { user } = useContext(AuthProvider);
    const email = user?.email;
    const { data: userProducts = [] } = useQuery({
        queryKey: ['userProduct', email],
        queryFn: async () => {
            const res = fetch(`http://localhost:5000/products?email=${email}`);
            const data = (await res).json();
            return data;
        }
    })
    return (
        <div className='max-w-[1200px] min-h-screen my-10 mx-auto'>
            <h3 className='text-3xl font-bold text-center my-10'>{user.displayName} you added {userProducts.length} items</h3>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    userProducts.map(product => <MySingleProduct
                        key={product._id}
                        product={product}
                    ></MySingleProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;