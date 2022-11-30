import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import useToken from '../../../hooks/useToken';
import SocialLogin from '../../../utilites/SocialLogin/SocialLogin';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    useTitle('SignUp')
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    console.log(createdUserEmail);
    const [imgUrl, setImgUrl] = useState('');

    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {
        const role = getValues('role');
        const status = 'unverified'


        const profilePhoto = data.profilePhoto[0];
        const formData = new FormData();
        formData.append('image', profilePhoto)

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`


        setSignUpError('');
        createUser(data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);

                // update user profile 
                const profile = {
                    displayName: data.fullName,

                }

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        if (imgData.success) {
                            profile.photoURL = imgData.data.url;
                            updateUser(profile)
                                .then(() => {
                                    toast.success('Sign Up Success');
                                    console.log(data.email);
                                    saveUser(data.fullName, data.email, role, status);
                                    window.location.reload();
                                })
                                .catch(error => {
                                    console.error(error.message);
                                })
                        }
                    })



            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })

        console.log(data);
    }



    const saveUser = (name, email, role, status) => {

        const user = { name, email, role, status }


        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
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
                                <input {...register("password", {
                                    required: "password is required",
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])/,
                                        message: "password must be one Uppercase letter, one special character letter, two number and tree lowercase letter"
                                    },
                                    minLength: { value: 8, message: "password must be 8 character or longer" }
                                })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <small className='text-red-400'>{errors.password.message}</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input {...register("profilePhoto", { required: "Profile Photo is required" })} type="file" className="" />
                                {errors.profilePhoto && <small className='text-red-400'>{errors.profilePhoto.message}</small>}
                            </div>
                            <div className="form-control mb-4">

                                <div className='flex justify-between mt-5'>
                                    <label className="label"><span className="label-text text-xl font-semibold mr-4">I would like to:</span></label>
                                    <select
                                        {...register("role")}
                                        className="select select-bordered lg:w-[160px] md:w-[160px] w-[130px]">
                                        <option selected defaultValue={'Buyer'} >Buyer</option>
                                        <option defaultValue={'Seller'} >Seller</option>
                                    </select>
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