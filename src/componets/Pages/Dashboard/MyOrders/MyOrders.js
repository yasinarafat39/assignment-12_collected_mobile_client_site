import React from 'react';

const MyOrders = () => {
    return (
        <div className='bg-gray-100 p-5'>
            <h2 className='text-3xl mb-3'>My Orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>

                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>

                            <td>
                                <div>
                                    <div className="font-bold">Product Name</div>
                                </div>
                            </td>

                            <td>Price</td>
                            <th>
                                <button className="btn btn-secondary">Pay</button>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;