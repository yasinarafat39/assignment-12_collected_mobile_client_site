import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import Seller from './Seller';

const AllSeller = () => {

    useTitle("All Seller");

    const { data: sellers } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='bg-gray-100 p-12'>
            <h2 className='text-3xl mb-3 '>All Seller</h2>


            <table className="table w-full">

                <thead>
                    <tr>
                        <th className='text-sm text-gray-600'>Image</th>
                        <th className='text-sm text-gray-600'>Product Name</th>
                        <th className='text-sm text-gray-600'>Price</th>
                        <th className='text-sm text-gray-600'>Sales Status</th>
                        <th className='text-sm text-gray-600'>Make Advertise</th>
                        <th className='text-sm text-gray-600'>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sellers &&
                        sellers.map(seller => <Seller
                            key={seller._id}
                            seller={seller}
                        ></Seller>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default AllSeller;