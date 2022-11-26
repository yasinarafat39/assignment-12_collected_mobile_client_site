import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import SocialLogin from '../../../utilites/SocialLogin/SocialLogin';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    useTitle('SignUp')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();


    const handleSignUp = data => {
        console.log(data);

        setSignUpError('');
        createUser(data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);

                // update user profile 
                const profile = {
                    displayName: data.fullName,

                }
                updateUser(profile)
                    .then(() => {
                        toast.success('Sign Up Success');
                        navigate('/');
                    })
                    .catch(error => {
                        console.error(error.message);
                    })
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control">
                                <label className="label" htmlFor='fullName'>
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("fullName", { required: "Name is required." })} type="text" placeholder="Full Name" id='fullName' className="input input-bordered" />
                                {errors.fullName && <small className='text-red-400'>{errors.fullName.message}</small>}
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input {...register("profilePhoto", { required: "Profile Photo is required" })} type="file" className="" />
                                {errors.profilePhoto && <small className='text-red-400'>{errors.profilePhoto.message}</small>}
                            </div>
                            <div className='form-control'>
                                <div className='flex justify-around mt-2'>
                                    <div className='flex justify-center items-center'>
                                        <input {...register("buyer")} type="radio" name="radio-1" id="buyer" className="radio mr-2" />
                                        <label htmlFor="buyer">
                                            <span className="label-text">As a buyer</span>
                                        </label>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <input {...register("seller")} type="radio" name="radio-1" id="seller" className="radio checked:bg-blue-500 mr-2 " />
                                        <label htmlFor="seller">
                                            <span className="label-text">As a seller</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {signUpError && <small className='text-red-600'>{signUpError}</small>}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className="px-6 text-sm text-center text-gray-600">Already have Account? { }
                            <Link to="/signin" className="hover:underline text-green-600">Sign in</Link>
                        </p>

                        <div className="divider"><small>OR</small></div>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;