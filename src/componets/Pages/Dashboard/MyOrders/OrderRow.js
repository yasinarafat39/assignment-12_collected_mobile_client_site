import React from 'react';
import toast from 'react-hot-toast';

const OrderRow = ({ booking, refetch }) => {
    const { _id, userName, userEmail, price, phone, meetingLocation, bookingProduct } = booking;
    const { picture, productName, location } = bookingProduct;



    const handleCancelOrder = () => {

        const proceed = window.confirm("Are you sure? You want to cancel your order.")

        if (proceed) {
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount === 1) {
                        toast.success('Delete Successfully');
                        refetch();
                    }
                })
        }


    }


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
                <button className="btn btn-sm btn-secondary">Pay</button>
            </th>

            <th>
                <button onClick={handleCancelOrder} className="btn btn-sm">Cancel</button>
            </th>

        </tr>
    );
};

export default OrderRow;