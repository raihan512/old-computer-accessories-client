import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';
import { useQuery } from '@tanstack/react-query';

const AddProducts = () => {
    const { user } = useContext(AuthProvider);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const currentTime = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`


    // Load user category by email
    const { data: userCategory = [], refetch } = useQuery({
        queryKey: ['userCategory', user.email],
        queryFn: async () => {
            const res = await fetch(`https://pcparts-server.vercel.app/users?email=${user.email}`)
            const data = await res.json();
            refetch();
            return data;
        }
    })


    const { data: productCategories = [] } = useQuery({
        queryKey: ['productCategories'],
        queryFn: async () => {
            const res = await fetch('https://pcparts-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })


    const handleAddProducts = data => {
        const image = data.productImg[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgUrl = imgData.data.url;
                    data.productImg = imgUrl;
                    data.postedTime = currentTime;
                    data.sellerName = user.displayName;
                    data.sellerEmail = user.email;
                    fetch('https://pcparts-server.vercel.app/products', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product Added SuccessFully');
                                navigate('/myproducts');
                            }
                        })
                }
            })
    }
    return (

        <div className='mx-5'>
            <div className='max-w-[1000px] my-20 mx-auto'>
                {
                    userCategory.category === 'seller' ? <div className='border border-accent rounded-md '>
                        <h3 className='text-xl md:text-3xl font-bold uppercase text-center my-10 text-accent'>Add your products</h3>
                        <form className='px-5 md:px-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-5' onSubmit={handleSubmit(handleAddProducts)}>
                            {/* Product name */}
                            <div>
                                <input type="text" {...register("productname", { required: true })} placeholder="Add Your Product Name" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                                {errors.productname && <span className='text-red-500'>Add Your product name</span>}
                            </div>
                            {/* Product Original Price */}
                            <div>
                                <input type="number" {...register('originalPrice', { required: true })} placeholder="Your Product original Price" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                                {errors.originalPrice && <span className='text-red-500'>You must have to add your Buying price</span>}
                            </div>
                            {/* Product Selling Price */}
                            <div>
                                <input type="number" {...register('resalePrice', { required: true })} placeholder="Your Product selling Price" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                                {errors.resalePrice && <span className='text-red-500'>You must have to add your selling price</span>}
                            </div>
                            {/* Product Condition */}
                            <div>
                                <select {...register("productCondition", { required: true })} className='select select-accent w-full mt-3'>
                                    <option value="">Product Condition</option>
                                    <option value="excellent">Excellent</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                </select>
                                {errors.productCondition && <span className='text-red-500'>You must have to add your product condition</span>}
                            </div>
                            {/* Product Category */}
                            <div>
                                <select {...register("productCategory", { required: true })} className='select select-accent w-full mt-3'>
                                    <option value="">Product Category</option>
                                    {
                                        productCategories.map(productCategory => <option
                                            className='text-black'
                                            key={productCategory._id}
                                            value={productCategory._id}>
                                            {productCategory.title}</option>)
                                    }
                                </select>
                                {errors.productCategory && <span className='text-red-500'>You must have to add a product category</span>}
                            </div>
                            {/* Add Phone Number */}
                            <div>
                                <input type="number" {...register('phone', { required: true, minLength: 11, maxLength: 11 })} placeholder="Add Your Phone Number" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                                {errors.phone && <span className='text-red-500'>You must have to add your phone number with 11 Digit</span>}
                            </div>
                            {/* Add Location */}
                            <div>
                                <input type="text" {...register('location', { required: true })} placeholder="Add Your Location" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                                {errors.location && <span className='text-red-500'>You must have to add a location</span>}
                            </div>
                            {/* Add purchased year */}
                            <div>
                                <input type='number' {...register('purchasedYear', { required: true, minLength: 4 })} placeholder="Which year did you bought this?" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                                {errors.purchasedYear && <span className='text-red-500'>You must have to add purchased year like: 2015</span>}
                            </div>
                            {/* Add years of use */}
                            <div>
                                <input type='text' {...register('usedFor', { required: true })} placeholder="How many days used? like: 3months/3years" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                                {errors.usedFor && <span className='text-red-500'>Add how many days used? like: 3months/3years</span>}
                            </div>
                            {/* Add Product Image */}
                            <div>
                                <input type="file" {...register('productImg', { required: true })} className="file-input w-full border border-accent mt-3" />
                                {errors.productImg && <span className='text-red-500'>You must have to add your product image</span>}
                            </div>
                            {/* Add Product description optional */}
                            <textarea  {...register('productDescription')}
                                placeholder="Describe about your products"
                                className='md:col-span-2 border border-accent w-full h-20 p-2 mt-3'></textarea>

                            <input type="submit" value="Submit" className='md:col-span-2 btn bg-error border-0 w-full hover:bg-success text-lg font-semibold mt-5' />
                        </form>
                    </div> :
                        <div>
                            <h3 className='text-xl md:text-3xl font-bold uppercase text-center my-10 text-accent'>
                                You are not a seller
                            </h3>
                            <span>To add your products create a seller account</span>
                        </div>
                }

            </div>
        </div >
    );
};

export default AddProducts;