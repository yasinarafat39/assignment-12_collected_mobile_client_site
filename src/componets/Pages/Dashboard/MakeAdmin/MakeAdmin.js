import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../../utilites/Loader/Loading';

const MakeAdmin = () => {

    useTitle("Make Admin")

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(' http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }



    const handleMakeAdmin = (_id, name) => {

        const proceed = window.confirm(`Are you sure? You wand to make Admin ${name}.`)

        if (proceed) {
            fetch(` http://localhost:5000/users/admin/${_id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Make Admin successfully!')
                        refetch();
                    }
                })
        }

    }




    return (
        <div className='bg-gray-300 p-12'>

            <h2 className='text-3xl mb-12'>Make Admin</h2>

            <div className="overflow-x-auto">
                {
                    users ?
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='text-sm text-gray-600'></th>
                                    <th className='text-sm text-gray-600'>Name</th>
                                    <th className='text-sm text-gray-600'>Email</th>
                                    <th className='text-sm text-gray-600'>User role</th>
                                    <th className='text-sm text-gray-600'>Make Admin</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users &&
                                    users.map((user, i) => <tr
                                        key={user._id}
                                    >
                                        <th>{i + 1}</th>
                                        <td className='font-bold'>{user.name}</td>
                                        <td className='font-semibold'>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            {
                                                user?.role !== 'Admin' &&
                                                <button onClick={() => handleMakeAdmin(user._id, user.name)} className='btn btn-xs btn-success'>Make Admin</button>
                                            }
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                        :
                        <h2 className='text-xl font-bold text-center my-20'>
                            Empty Users
                        </h2>
                }

            </div>

        </div>
    );
};

export default MakeAdmin;