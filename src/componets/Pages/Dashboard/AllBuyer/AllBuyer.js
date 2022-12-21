import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../../utilites/Loader/Loading';

const AllBuyer = () => {

    useTitle("All Buyer")

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(' https://collected-mobile-server.vercel.app/users/Buyer', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDeleteBuyer = (_id, name) => {
        const proceed = window.confirm(`You want to Verify ${name}`);

        if (proceed) {
            fetch(` https://collected-mobile-server.vercel.app/users/verify/${_id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('User Verify successful.')
                        refetch();
                    }
                })
        }
    }


    return (
        <div className='bg-gray-300 p-12'>
            <h2 className='text-3xl mb-3 '>All Buyer</h2>

            {
                buyers.length ?
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyers &&
                                    buyers.map((buyer, i) => <tr
                                        key={buyer._id}
                                    >
                                        <th>{i + 1}</th>
                                        <th>{buyer.name}</th>
                                        <td>{buyer.email}</td>

                                        <td className=''>
                                            <button onClick={() => handleDeleteBuyer(buyer._id, buyer.name)} className='btn btn-sm'>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                    </div>

                    :

                    <h2 className='text-2xl text-gray-500 font-bold text-center my-20'>
                        Buyer is Empty.
                    </h2>

            }

        </div>
    );
};

export default AllBuyer;