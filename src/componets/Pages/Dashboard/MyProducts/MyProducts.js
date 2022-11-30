import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../../utilites/Loader/Loading';
import ProductRow from './ProductRow';

const MyProducts = () => {


    useTitle("My Products");

    const { user } = useContext(AuthContext);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(` https://collected-mobile-server.vercel.app/products?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return (data);
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-gray-100 p-12'>

            <h2 className='text-3xl mb-3'>My Products</h2>

            <div className="overflow-x-auto">

                {
                    products.length ?
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th className='text-sm'>Image</th>
                                    <th className='text-sm'>Product Name</th>
                                    <th className='text-sm'>Price</th>
                                    <th className='text-sm'>Sales Status</th>
                                    <th className='text-sm'>Make Advertise</th>
                                    <th className='text-sm'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    products.map(product => <ProductRow
                                        key={product._id}
                                        product={product}
                                        refetch={refetch}
                                    ></ProductRow>)
                                }

                            </tbody>

                        </table>
                        :
                        <h2 className='text-2xl text-gray-500 font-bold text-center my-20'>
                            Empty Products
                        </h2>
                }


            </div>

        </div>
    );
};

export default MyProducts;