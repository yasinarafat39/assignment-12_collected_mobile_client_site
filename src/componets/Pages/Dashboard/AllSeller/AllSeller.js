
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../../utilites/Loader/Loading';


const AllSeller = () => {

    useTitle("All Seller");

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(' http://localhost:5000/users/Seller', {
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


    const handleVerifyUser = (name, _id) => {
        const proceed = window.confirm(`You want to Verify ${name}`);

        if (proceed) {
            fetch(` http://localhost:5000/users/verify/${_id}`, {
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


    const handleDeleteSeller = (_id, name) => {

        const proceed = window.confirm(`Are you sure? You want to delete ${name}`)

        if (proceed) {
            fetch(` http://localhost:5000/seller/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount === 1) {
                        toast.success('Delete Successfully.');
                        refetch();
                    }
                })
        }


    }

    return (
        <div className='bg-gray-300 p-12'>
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
                                            <button onClick={() => handleVerifyUser(seller.name, seller._id)}
                                                className={`${seller?.status === 'Verified' ? 'btn btn-sm btn-success' : 'btn btn-sm btn-secondary'}`}>
                                                {seller?.status === 'Verified' ? <>
                                                    {seller.status} <FaCheckCircle className='  ml-1' />
                                                </>
                                                    : <>
                                                        {seller.status}
                                                    </>

                                                }
                                            </button>
                                        </td>
                                        <td className=''>
                                            <button onClick={() => handleDeleteSeller(seller._id, seller.name)} className='btn btn-sm'>Delete</button>
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