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
                    <div className="font-bold">productName</div>
                </div>
            </td>

            <td>{price}</td>
            <th>
                <button className="btn btn-secondary">Pay</button>
            </th>
        </tr>
    );
};

export default OrderRow;