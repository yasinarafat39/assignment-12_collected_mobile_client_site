import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseItem from './AdvertiseItem';



const AdvertiseItems = () => {

    const { data: advertiseItems } = useQuery({
        queryKey: ['advertise Items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    })


    return (


        <section className={advertiseItems.length === 0 ? 'hidden' : 'py-6 bg-gray-100 text-gray-800 mt-24'}>
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-none sm:text-5xl">Advertise Items</h3>
                    <p className="max-w-2xl text-gray-600"></p>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

                    {
                        advertiseItems &&
                        advertiseItems.map(advertiseItem => <AdvertiseItem
                            key={advertiseItem._id}
                            advertiseItem={advertiseItem}
                        ></AdvertiseItem>)
                    }

                </div>
            </div>
        </section>


    );
};

export default AdvertiseItems;