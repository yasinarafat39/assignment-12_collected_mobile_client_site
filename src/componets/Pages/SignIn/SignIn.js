import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import SocialLogin from '../../../utilites/SocialLogin/SocialLogin';

const SignIn = () => {

    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    useTitle("SignIn")
    const [signInError, setSignInError] = useState('');
    const { userSignIn, handleForgetPassword } = useContext(AuthContext);

    const handleSignIn = data => {
        console.log(data);

        userSignIn(data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                toast.success('LogIn Success!');
                setSignInError('');
            })
            .catch(error => {
                setSignInError(error.message);
                console.error(error);
            })
    }


    // Reset Password
    const handlePasswordReset = () => {

        const email = getValues('email');
        console.log(email);

        handleForgetPassword(email)
            .then(() => {
                toast.success('Password Reset Email send to your Email Address. Please Check.')
            })
            .catch(error => {
                setSignInError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <h3 className='text-center text-2xl font-semibold'>Sign In</h3>

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
                                <label className="label">
                                    <span onClick={handlePasswordReset} className="label-text-alt link link-hover cursor-pointer">Forgot password?</span>
                                </label>
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
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;