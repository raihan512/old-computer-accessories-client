import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';
import MySingleProduct from './MySingleProduct/MySingleProduct';

const MyProducts = () => {
    const { user } = useContext(AuthProvider);
    const email = user?.email;
    const { data: userProducts = [], refetch } = useQuery({
        queryKey: ['userProduct', email],
        queryFn: async () => {
            const res = fetch(`https://pcparts-server.vercel.app/products?email=${email}`);
            const data = (await res).json();
            return data;
        }
    })
    const handleDeleteProduct = id => {
        fetch(`https://pcparts-server.vercel.app/products/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Deleted')
                    refetch();
                }
            })
            .catch(error => console.error(error))
    }

    const handleAdvertiseProduct = id => {
        fetch(`https://pcparts-server.vercel.app/products/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Product Advertised')
                    refetch();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='max-w-[1200px] min-h-screen my-5 md:my-10 mx-auto'>
            <div className='mx-5'>
                <h2 className='text-center text-xl md:text-4xl text-black uppercase font-bold my-5 md:my-10'>My Products</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center mb-5'>
                    {
                        userProducts.map(product => <MySingleProduct
                            key={product._id}
                            product={product}
                            handleDeleteProduct={handleDeleteProduct}
                            handleAdvertiseProduct={handleAdvertiseProduct}
                        ></MySingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProducts;