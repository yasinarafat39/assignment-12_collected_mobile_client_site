import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInError, setSignInError] = useState('');


    const handleSignIn = data => {
        console.log(data);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-control">
                                <label className="label" htmlFor='email'>
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: "Email is required." })} type="email" placeholder="email" id='email' className="input input-bordered" />
                                {errors.email && <small className='text-red-400'>{errors.email.message}</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: "Password is required" })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <small className='text-red-400'>{errors.password.message}</small>}
                            </div>

                            {signInError && <small className='text-red-600'>{signInError}</small>}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                        <p className="px-6 text-sm text-center text-gray-600">New to Collected Mobile? { }
                            <Link to="/signup" className="hover:underline text-green-600">Sign Up</Link>
                        </p>

                        <div className="divider"><small>OR</small></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;