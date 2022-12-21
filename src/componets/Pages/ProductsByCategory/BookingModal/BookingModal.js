
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ bookingProduct, setBookingProduct }) => {
    const { _id, productName, brand, seller, location, picture, resalePrice, yearsOfUsed } = bookingProduct;
    const { user } = useContext(AuthContext);
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();



    const testFunction = data => {

        const booking = {
            userName: data.name,
            userEmail: data.email,
            price: data.price,
            phone: data.phone,
            meetingLocation: data.location,
            bookingProduct: bookingProduct
        }
        console.log(booking);


        fetch(' http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking Confirm');
                }
            })

        setBookingProduct(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">{productName}</h3>


                    <form onSubmit={handleSubmit(testFunction)}>
                        <div className="form-control">
                            <label className="label" htmlFor='name'>
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "name is required." })} defaultValue={user.displayName} readOnly type="text" id='name' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email is required." })} defaultValue={user.email} readOnly type="email" id='email' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='price'>
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price", { required: "price is required." })} defaultValue={resalePrice} readOnly type="text" id='price' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='phone'>
                                <span className="label-text">Phone</span>
                            </label>
                            <input {...register("phone", { required: "phone is required." })} type="number" id='phone' className="input input-bordered" />
                            {errors.phone && <small className='text-red-400'>{errors.phone.message}</small>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='location'>
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input {...register("location", { required: "Meeting location is required." })} type="text" id='location' className="input input-bordered" />
                            {errors.location && <small className='text-red-400'>{errors.location.message}</small>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;