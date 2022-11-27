import React from 'react';
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const AddProducts = () => {
    const navigate = useNavigate();
    const productCategories = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

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
                    console.log(data);
                    fetch('http://localhost:5000/products', {
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
            <div className='max-w-[600px] border border-accent rounded-md my-20 mx-auto'>
                <h3 className='text-3xl font-bold uppercase text-center my-10 text-accent'>Add your products</h3>
                <form className='px-20 pb-10' onSubmit={handleSubmit(handleAddProducts)}>
                    {/* Product name */}
                    <input type="text" {...register("productname", { required: true })} placeholder="Add Your Product Name" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                    {errors.productname && <span className='text-red-500'>Add Your product name</span>}
                    {/* Product Selling Price */}
                    <input type="number" {...register('productPrice', { required: true })} placeholder="Your Product selling Price" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                    {errors.productPrice && <span className='text-red-500'>You must have to add your selling price</span>}
                    {/* Product Condition */}
                    <select {...register("productCondition", { required: true })} className='select select-accent w-full mt-3'>
                        <option value="">Product Condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                    {errors.productCondition && <span className='text-red-500'>You must have to add your product condition</span>}
                    {/* Product Category */}
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
                    {/* Add Phone Number */}
                    <input type="number" {...register('phone', { required: true, minLength: 11, maxLength: 11 })} placeholder="Add Your Phone Number" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                    {errors.phone && <span className='text-red-500'>You must have to add your phone number with 11 Digit</span>}
                    {/* Add Location */}
                    <input type="text" {...register('location', { required: true })} placeholder="Add Your Location" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                    {errors.location && <span className='text-red-500'>You must have to add a location</span>}
                    {/* Add purchased year */}
                    <input type='number' {...register('purchasedYear', { required: true, minLength: 4 })} placeholder="Which year did you bought this?" className="input input-bordered input-accent w-full text-lg font-semibold mt-3" />
                    {errors.purchasedYear && <span className='text-red-500'>You must have to add purchased year like: 2015</span>}
                    {/* Add Product Image */}
                    <input type="file" {...register('productImg', { required: true })} className="file-input w-full border border-accent mt-3" />
                    {errors.productImg && <span className='text-red-500'>You must have to add your product image</span>}
                    {/* Add Product description optional */}
                    <textarea  {...register('productDescription')}
                        placeholder="Describe about your products"
                        className='border border-accent w-full h-20 p-2 mt-3'></textarea>

                    <input type="submit" value="Submit" className='btn bg-error border-0 w-full hover:bg-success text-lg font-semibold mt-5' />
                </form>
            </div>
        </div >
    );
};

export default AddProducts;