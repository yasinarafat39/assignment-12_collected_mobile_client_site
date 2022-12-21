import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../../utilites/Loader/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {

    useTitle("My Orders")

    const { user } = useContext(AuthContext);

    const url = ` http://localhost:5000/bookings?email=${user.email}`;

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
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

    return (
        <div className='bg-gray-300 p-12'>
            <h2 className='text-3xl mb-3'>My Orders</h2>

            <div className="overflow-x-auto w-full">

                {
                    bookings.length ?
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th className='text-sm'>Image</th>
                                    <th className='text-sm'>Title</th>
                                    <th className='text-sm'>Price</th>
                                    <th className='text-sm'>Payment</th>
                                    <th className='text-sm'>Cancel</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    bookings &&
                                    bookings.map((booking) => <OrderRow
                                        key={booking._id}
                                        booking={booking}
                                        refetch={refetch}
                                    ></OrderRow>)
                                }


                            </tbody>

                        </table>

                        :

                        <h2 className='text-2xl text-gray-500 font-bold text-center my-20'>
                            Empty Orders
                        </h2>
                }

            </div>
        </div>
    );
};

export default MyOrders;