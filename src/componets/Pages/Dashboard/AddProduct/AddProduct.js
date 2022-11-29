import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const [addProductError, setAddProductError] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const [mobilePicture, setMobilePicture] = useState('');

    const navigate = useNavigate();



    const handleAddProduct = data => {

        const picture = data.picture[0];
        const formData = new FormData();
        formData.append('image', picture)



        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const picture = imgData.data.url;

                    const product = {
                        category_id: parseInt(data.category_id),
                        condition: data.condition,
                        description: data.description,
                        location: data.location,
                        originalPrice: data.originalPrice,
                        picture,
                        productName: data.productName,
                        resalePrice: data.resalePrice,
                        yearsOfUsed: data.yearsOfUsed,
                        seller: user.displayName,
                        email: user.email,
                        salesStatus: "available"
                    }

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.acknowledged) {
                                toast.success('Product Add Successfully!')
                                navigate('/dashboard/myproducts');
                            }

                        })
                }
            })




    }

    return (
        <div className='bg-gray-100 p-12'>
            <h2 className='text-3xl mb-3 text-center'>Add A Product</h2>

            <div className='lg:w-1/2 mx-auto'>
                <form onSubmit={handleSubmit(handleAddProduct)} className="">
                    <div className="form-control">
                        <label className="label" htmlFor='productName'>
                            <span className="label-text">Mobile Name</span>
                        </label>
                        <input {...register("productName", { required: "Product Name is required." })} type="text" placeholder="Mobile Name" id='productName' className="input input-bordered" />
                        {errors.productName && <small className='text-red-400'>{errors.productName.message}</small>}
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='originalPrice'>
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("originalPrice", { required: "originalPrice is required." })} type="text" placeholder="Original Price" id='originalPrice' className="input input-bordered" />
                        {errors.originalPrice && <small className='text-red-400'>{errors.originalPrice.message}</small>}
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='resalePrice'>
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input {...register("resalePrice", { required: "resalePrice is required." })} type="text" placeholder="Resale Price" id='resalePrice' className="input input-bordered" />
                        {errors.resalePrice && <small className='text-red-400'>{errors.resalePrice.message}</small>}
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='location'>
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: "location is required." })} type="text" placeholder="Location" id='location' className="input input-bordered" />
                        {errors.location && <small className='text-red-400'>{errors.location.message}</small>}
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='yearOfPurchase'>
                            <span className="label-text">Year Of Purchase</span>
                        </label>
                        <input {...register("yearsOfUsed", { required: "Year Of Purchase is required." })} type="text" placeholder="Year Of Purchase" id='yearOfPurchase' className="input input-bordered" />
                        {errors.yearOfPurchase && <small className='text-red-400'>{errors.yearOfPurchase.message}</small>}
                    </div>

                    <div className='form-control lg:flex lg:flex-row justify-between mt-5'>
                        <label className="label"><span className="label-text text-xl font-semibold mr-4"> Mobile Condition:</span></label>
                        <select
                            {...register("condition")}
                            className="select select-bordered lg:w-[160px] md:w-[160px] w-[130px]">
                            <option defaultValue={'Excellent'} >Excellent</option>
                            <option defaultValue={'Good'} >Good</option>
                            <option defaultValue={'Fair'} >Fair</option>
                        </select>
                    </div>

                    <div className='form-control lg:flex lg:flex-row justify-between mt-5'>
                        <label className="label"><span className="label-text text-xl font-semibold mr-4"> Mobile Category:</span></label>
                        <select
                            {...register("category_id")}
                            className="select select-bordered lg:w-[160px] md:w-[160px] w-[130px]">
                            <option value={'1'} >Apple</option>
                            <option value={'2'} >Samsung</option>
                            <option value={'3'} >Xiaomi</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Photo</span>
                        </label>
                        <input {...register("picture", { required: "Mobile Photo is required" })} type="file" className="" />
                        {errors.picture && <small className='text-red-400'>{errors.picture.message}</small>}
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='description'>
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("description", { required: "Description is required." })} className="textarea textarea-bordered h-24" id='description'></textarea>
                        {errors.description && <small className='text-red-400'>{errors.description.message}</small>}
                    </div>

                    {addProductError && <small className='text-red-600'>{addProductError}</small>}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;