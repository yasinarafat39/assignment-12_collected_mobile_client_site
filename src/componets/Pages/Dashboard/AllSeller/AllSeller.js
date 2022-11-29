
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../../utilites/Loader/Loading';


const AllSeller = () => {

    useTitle("All Seller");

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/Seller');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-gray-100 p-12'>
            <h2 className='text-3xl mb-3 '>All Seller</h2>


            {
                sellers.length ?
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Verify User</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sellers &&
                                    sellers.map((seller, i) => <tr
                                        key={seller._id}
                                    >
                                        <th>{i + 1}</th>
                                        <th>{seller.name}</th>
                                        <td>{seller.email}</td>
                                        <td>
                                            <button className='btn btn-sm btn-secondary'>Verify</button>
                                        </td>
                                        <td className=''>
                                            <button className='btn btn-sm'>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                    </div>

                    :

                    <h2 className='text-2xl text-gray-500 font-bold text-center my-20'>
                        Seller is Empty.
                    </h2>

            }

        </div>
    );
};

export default AllSeller;