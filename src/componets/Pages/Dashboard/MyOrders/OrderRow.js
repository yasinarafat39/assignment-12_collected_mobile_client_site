import React from 'react';

const OrderRow = ({ booking }) => {
    const { userName, userEmail, price, phone, meetingLocation, bookingProduct } = booking;
    const { picture, productName, location } = bookingProduct;
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-28 h-28">
                            <img src={picture} alt="product" />
                        </div>
                    </div>

                </div>
            </td>

            <td>
                <div>
                    <div className="font-bold text-2xl">{productName}</div>
                </div>
            </td>

            <td className='font-bold text-xl text-cyan-500'>{price} taka</td>
            <th>
                <button className="btn btn-secondary">Pay</button>
            </th>
        </tr>
    );
};

export default OrderRow;