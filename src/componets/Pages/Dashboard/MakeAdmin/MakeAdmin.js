import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../../utilites/Loader/Loading';

const MakeAdmin = () => {

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='bg-gray-100 p-12'>

            <h2 className='text-3xl mb-3'>My Product</h2>


        </div>
    );
};

export default MakeAdmin;