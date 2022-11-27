import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Product from './Product';


const ProductsByCategory = () => {

    const products = useLoaderData();
    const [bookingProduct, setBookingProduct] = useState(null);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-5 m-5'>
            {
                products?.map(product => <Product
                    key={product._id}
                    product={product}
                    setBookingProduct={setBookingProduct}
                ></Product>)
            }
            {
                bookingProduct &&
                <BookingModal
                    bookingProduct={bookingProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductsByCategory;