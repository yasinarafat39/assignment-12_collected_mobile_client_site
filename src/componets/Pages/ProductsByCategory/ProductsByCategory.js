import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';


const ProductsByCategory = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-5 m-5'>
            {
                products?.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default ProductsByCategory;