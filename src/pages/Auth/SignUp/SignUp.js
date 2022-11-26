import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const SignUp = () => {
    const { signUp, updateUser } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Create user on firebase with email and password
    const handleSignUp = data => {
        signUp(data.email, data.password)
            .then(res => {
                console.log(res.user);
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                // Update user info
                updateUser(userInfo).then(() => { })
                    // show error if update user failed
                    .catch(err => console.log(err));
                addUser(data.name, data.email, data.category)
            })
            // Show error if user creation failed
            .catch(error => {
                if (error.message.includes('already-in-use')) {
                    toast.error('User Already Exist')
                }
            })

    }

    // create user in firebase with google

    // Add user to the database
    const addUser = (name, email, category) => {
        const user = { name, email, category }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User Added')
                }
            })
    }

    return (
        <div className='max-w-[500px] bg-base-200 shadow-lg mx-auto my-20 p-10 border rounded-md'>
            {/* Title */}
            <h2 className='text-4xl font-bold uppercase text-center'>SignUp</h2>
            {/* Form Start */}
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
                {/* Submit Button */}
                <input className='btn mt-5' type="submit" />
                <div className="divider">OR</div>
                {/* Google Provider */}
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </form>
            {/* Form End */}
        </div>
    );
};

export default SignUp;