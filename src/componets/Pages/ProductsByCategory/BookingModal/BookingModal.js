import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ bookingProduct }) => {
    const { _id, productName, brand, seller, location, originalPrice, picture, resalePrice, yearsOfUsed } = bookingProduct;
    const { user } = useContext(AuthContext);
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();


    const handleBooking = () => {

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">{productName}</h3>
                    <form onSubmit={handleSubmit(handleBooking)}>
                        <div className="form-control">
                            <label className="label" htmlFor='name'>
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "name is required." })} defaultValue={user.displayName} readOnly disabled type="text" id='name' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email is required." })} defaultValue={user.email} readOnly disabled type="email" placeholder="email" id='email' className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;