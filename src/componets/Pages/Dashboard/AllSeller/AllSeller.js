import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Seller from './Seller';

const AllSeller = () => {


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
            <h2 className='text-3xl mb-3 '>Add A Product</h2>


            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Sales Status</th>
                        <th>Make Advertise</th>
                        <th>Delete</th>
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