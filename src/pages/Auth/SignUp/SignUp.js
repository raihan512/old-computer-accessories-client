import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const SignUp = () => {
    const { signUp } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");

    const handleSignUp = data => {
        console.log(data);
    }

    console.log(data);
    return (
        <div className='max-w-[450px] bg-base-200 shadow-lg mx-auto my-20 p-10 border rounded-md'>
            <h2 className='text-4xl font-bold uppercase text-center'>SignUp</h2>
            <form
                onSubmit={handleSubmit(handleSignUp)}>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} className="input input-bordered w-full" />
                    {errors.name && errors.name.type === "required" && <span className='text-red-600'>Name is required</span>}
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" />
                    {errors.email && errors.email.type === "required" && <span className='text-red-600'>Email is required</span>}
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">You are User/Seller?</span>
                    </label>
                    <select {...register("category", { required: true })}
                        className="select select-bordered text-lg">
                        <option value='user'>User</option>
                        <option value='seller'>Seller</option>
                    </select>
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Password</span>
                    </label>
                    <input type="password" {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 6, message: "Password length must be 6" },
                        pattern: { value: /(?=(.*[A-Z])(?=(.*[a-z]))(?=(.*[0-9])(?=(.*[!@#$%^&*()]))))/, message: 'Password must have Capital & Small Letter a number & special character' }
                    })} className="input input-bordered w-full" />
                    <label className="label text-red-600">
                        {errors.password && <span>{errors.password?.message}</span>}
                    </label>
                </div>
                <input className='btn mt-5' type="submit" />
            </form>
        </div>
    );
};

export default SignUp;