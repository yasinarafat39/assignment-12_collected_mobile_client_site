import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import ProductRow from './ProductRow';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user.email}`);
            const data = await res.json();
            return (data);
        }
    })


    return (
        <div className='bg-gray-100 p-12'>

            <h2 className='text-3xl mb-3'>My Product</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Make Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products &&
                            products.map(product => <ProductRow
                                key={product._id}
                                product={product}
                            ></ProductRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyProducts;