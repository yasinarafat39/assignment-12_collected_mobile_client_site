import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loading from '../../utilites/Loader/Loading';

const SellerRoute = ({ children }) => {

    const { user, loading, userLogOut } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <div className='max-h-full max-w-full flex justify-center '>
            <Loading></Loading>
        </div>
    }

    if (user && isSeller) {
        return children;
    }

    const handleUserLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success('LogOut Success')
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return <>

        {
            handleUserLogOut()
        }

        <Navigate to="/signin" state={{ from: location }} replace ></Navigate>
    </>

};

export default SellerRoute;