import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ProductRow = ({ product }) => {
    const { _id, picture, salesStatus, resalePrice, productName, } = product;



    const handleDeleteProduct = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount === 1) {
                    toast.success('Delete Successfully');
                }
            })
    }


    const handleMakeAdvertise = () => {
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Advertise Make Success');
                }
            })
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

            <td className='font-bold text-xl text-cyan-500'>{resalePrice} taka</td>
            <td className='text-xl font-bold text-green-600'>{salesStatus}</td>
            <th>
                <button onClick={handleMakeAdvertise} className="btn btn-secondary btn-sm ">Make Advertise</button>
            </th>
            <th>
                <button onClick={handleDeleteProduct} className="btn btn-sm ">Delete</button>
            </th>
        </tr>
    );
};

export default ProductRow;