import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log(data);
    return (
        <div className='max-w-[450px] bg-base-200 shadow-lg mx-auto my-20 p-10 border rounded-md'>
            <h2 className='text-4xl font-bold uppercase text-center'>SignIn</h2>
            <form
                onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" />
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Password</span>
                    </label>
                    <input type="password" {...register("password", { required: true })} className="input input-bordered w-full" />
                </div>
                <div>
                    <p>New user? <Link to='/signup' className='font-semibold text-accent'>SignUp</Link></p>
                </div>
                <input className='btn mt-5' type="submit" />
            </form>
        </div>
    );
};

export default SignIn;