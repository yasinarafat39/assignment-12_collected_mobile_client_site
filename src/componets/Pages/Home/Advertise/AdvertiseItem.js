import React from 'react';

const AdvertiseItem = ({ advertiseItem }) => {

    const { picture, resalePrice, productName, originalPrice } = advertiseItem;

    return (
        <div className="space-y-4 hover:shadow-lg hover:rounded-2xl">
            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={picture} />
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">{productName}</h4>
                <p className="text-md text-gray-600 mt-1"><del>{originalPrice} taka</del></p>
                <p className="text-md text-gray-600 mt-1">{resalePrice} taka</p>

            </div>
        </div>
    );
};

export default AdvertiseItem;