import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/Authprovider/AuthContext';

const Login = () => {
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
        <section className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col justify-center items-center mt-5'>
                <p className='text-lg font-bold'>Test data by user category</p>
                <p className='border-b'>Admin --- email: admin@mail.com || Pass: Raihan1506?#</p>
                <p className='border-b'>Seller --- email: akash@gmail.com || Pass: Raihan1506?#</p>
                <p className='border-b-4'>buyer --- email: messi@gmail.com || Pass: Raihan1506?#</p>
                or create seller or buyer account

            </div>
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
                        <p>New user? <Link to='/register' className='font-semibold text-accent'>Register</Link></p>
                    </div>
                    <input className='py-2 w-full bg-accent rounded-md text-white cursor-pointer font-semibold mt-5' type="submit" value='Login' />
                </form>
            </div>
        </section>
    );
};

export default Login;