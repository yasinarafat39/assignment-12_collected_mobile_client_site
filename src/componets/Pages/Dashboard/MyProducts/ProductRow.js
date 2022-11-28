import React from 'react';

const ProductRow = ({ product }) => {
    console.log(product);
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
                console.log(data);
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
                <button className="btn btn-secondary">Make Advertise</button>
            </th>
            <th>
                <button onClick={handleDeleteProduct} className="btn ">Delete</button>
            </th>
        </tr>
    );
};

export default ProductRow;