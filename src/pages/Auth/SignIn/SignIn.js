import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const SignIn = () => {
    const { signIn } = useContext(AuthProvider);
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div className='max-w-[450px] bg-base-200 shadow-lg mx-auto my-20 p-10 border rounded-md'>
            <h2 className='text-4xl font-bold uppercase text-center'>SignIn</h2>
            <form
                onSubmit={handleSubmit(handleLogin)}>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Email</span>
                    </label>
                    <input type="email" {...register("email")} className="input input-bordered w-full" />
                    <p className='text-sm texte-red-500'>{loginError}</p>
                </div>
                {/* Input Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold uppercase">Password</span>
                    </label>
                    <input type="password" {...register("password")} className="input input-bordered w-full" />
                    <p className='text-sm texte-red-500'>{loginError}</p>
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