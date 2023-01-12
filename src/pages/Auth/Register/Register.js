import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const Register = () => {
    const { signUp, updateUser, googleLogin } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // Create user on firebase with email and password
    const handleSignUp = data => {
        signUp(data.email, data.password)
            .then(res => {
                const userInfo = { displayName: data.name }
                // Update user info
                updateUser(userInfo).then(() => { }).catch(err => console.log(err));
                // Add user to database if everything is ok
                addUser(data.name, data.email, data.category)
                toast.success('User Created Successfully');
            })
            // Show error if user creation failed
            .catch(error => {
                if (error.message.includes('already-in-use')) {
                    toast.error('User Already Exist')
                }
            })

    }

    // create user in firebase with google
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                addUser(user.displayName, user.email, 'buyer');
                toast.success('User Added')
            })
            .catch(error => console.log(error))
    }

    // Add user to the database
    const addUser = (name, email, category) => {
        const user = { name, email, category }
        fetch('https://pcparts-server.vercel.app/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')
            })
    }

    return (
        <div className='max-w-[500px] bg-base-200 shadow-lg mx-auto my-20 p-10 border rounded-md'>
            {/* Title */}
            <h2 className='text-2xl  md:text-4xl font-semibold uppercase text-center'>Register</h2>
            {/* Form Start */}
            <form
                onSubmit={handleSubmit(handleSignUp)}>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-semibold capitalize">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} className="input input-bordered w-full" />
                    {errors.name && errors.name.type === "required" && <span className='text-red-600'>Name is required</span>}
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-semibold capitalize">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" />
                    {errors.email && errors.email.type === "required" && <span className='text-red-600'>Email is required</span>}
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-semibold capitalize">You are Buyer/Seller?</span>
                    </label>
                    <select {...register("category", { required: true })}
                        className="select select-bordered text-lg">
                        <option value='buyer'>Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg font-semibold capitalize">Password</span>
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
                <input className='py-2 w-full bg-accent rounded-md text-white cursor-pointer font-semibold mt-5' type="submit" value='Register' />
                <div className="divider">OR</div>
                {/* Google Provider */}
                <button
                    onClick={handleGoogleLogin}
                    className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </form>
            {/* Form End */}
        </div>
    );
};

export default Register;