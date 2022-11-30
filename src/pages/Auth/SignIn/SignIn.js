import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const SignIn = () => {
    const { signIn } = useContext(AuthProvider);
    const { register, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                if (error.message.includes('user-not-found')) {
                    setLoginError('User Not Found');
                } else if (error.message.includes('wrong-password')) {
                    setLoginError('Wrong Password');
                }
            });
    }
    return (
        <div className='max-w-[450px] bg-base-200 shadow-lg mx-auto my-20 p-10 border rounded-md'>
            <h2 className='text-2xl  md:text-4xl font-semibold uppercase text-center'>Sign-In</h2>
            <form
                onSubmit={handleSubmit(handleLogin)}>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Email</span>
                    </label>
                    <input type="email" {...register("email")} className="input input-bordered w-full" />
                    <p className='text-sm text-red-500'>{loginError}</p>
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Password</span>
                    </label>
                    <input type="password" {...register("password")} className="input input-bordered w-full" />
                    <p className='text-sm text-red-500'>{loginError}</p>
                </div>
                <div>
                    <p>New user? <Link to='/signup' className='font-semibold text-accent'>SignUp</Link></p>
                </div>
                <input className='py-2 w-full bg-accent rounded-md text-white cursor-pointer font-semibold mt-5' type="submit" value='SignIn' />
            </form>
        </div>
    );
};

export default SignIn;