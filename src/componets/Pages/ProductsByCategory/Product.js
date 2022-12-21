import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import useTitle from '../../../hooks/useTitle';


const Product = ({ product, setBookingProduct }) => {

    useTitle('All Products')

    const { _id, productName, salesStatus, condition, email, seller, location, originalPrice, picture, resalePrice, yearsOfUsed } = product;
    console.log(email);

    const { data: isVerified } = useQuery({
        queryKey: ['status'],
        queryFn: async () => {
            const res = await fetch(` http://localhost:5000/users/verified/${email}`);
            const data = await res.json();
            return data;
        }
    })

    isVerified && console.log(isVerified);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={picture} alt="Shoes" className="rounded-xl h-96 " />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{productName}</h2>
                <h2 className="card-title text-2xl "> Resale Price:<span className='text-success'>{resalePrice} taka</span></h2>

                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-xl">
                        Original Price: <span className='text-red-400'>{originalPrice} taka</span>
                    </h2>
                </div>
                <h3 className='text-xl flex justify-start items-center'> <FaMapMarkerAlt className='mr-1 text-gray-600' /> {location}</h3>


                <div className='flex justify-between'>

                    <h4 className='text-xl font-bold bg-green-100 p-2 rounded-md'>salesStatus: {salesStatus}</h4>
                    <h4 className='text-xl font-bold bg-green-100 p-2 rounded-md'>Used: {yearsOfUsed}</h4>
                </div>
                <div className='flex justify-start'>
                    <h4 className=' text-xl font-bold bg-blue-200 p-2 rounded-md'>condition: {condition}</h4>
                </div>

                <div className='flex justify-start items-center'>
                    <h3 className='text-xl font-serif font-bold my-4 flex justify-between items-center'>
                        <span className='mr-1'> <span className='bg-lime-300 p-2 text-slate-600'>Seller:</span>  {seller}</span>
                        {
                            isVerified?.isVerified && <FaCheckCircle title='Verified' className='text-sky-400' />
                        }
                    </h3>
                </div>

                <div className="card-actions mt-4">
                    <label
                        onClick={() => setBookingProduct(product)}
                        htmlFor="booking-modal"
                        className="btn btn-secondary w-full">
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;