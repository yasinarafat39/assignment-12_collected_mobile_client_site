import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const [addProductError, setAddProductError] = useState('');

    const handleAddProduct = data => {

    }

    return (
        <div className='bg-gray-100 p-12'>
            <h2 className='text-3xl mb-3'>Add A Product</h2>

            <div className='lg:w-1/2 '>
                <form onSubmit={handleSubmit(handleAddProduct)} className="">
                    <div className="form-control">
                        <label className="label" htmlFor='productName'>
                            <span className="label-text">Product Name</span>
                        </label>
                        <input {...register("productName", { required: "Product Name is required." })} type="text" placeholder="Product Name" id='productName' className="input input-bordered" />
                        {errors.productName && <small className='text-red-400'>{errors.productName.message}</small>}
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='price'>
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("resalePrice", { required: "resalePrice Name is required." })} type="text" placeholder="Price" id='price' className="input input-bordered" />
                        {errors.resalePrice && <small className='text-red-400'>{errors.resalePrice.message}</small>}
                    </div>

                    <div className='form-control lg:flex lg:flex-row justify-between mt-5'>
                        <label className="label"><span className="label-text text-xl font-semibold mr-4"> Product Condition:</span></label>
                        <select
                            {...register("condition")}
                            className="select select-bordered lg:w-[160px] md:w-[160px] w-[130px]">
                            <option defaultValue={'Excellent'} >Excellent</option>
                            <option defaultValue={'Good'} >Good</option>
                            <option defaultValue={'Fair'} >Fair</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='location'>
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: "location Name is required." })} type="text" placeholder="Location" id='location' className="input input-bordered" />
                        {errors.location && <small className='text-red-400'>{errors.location.message}</small>}
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