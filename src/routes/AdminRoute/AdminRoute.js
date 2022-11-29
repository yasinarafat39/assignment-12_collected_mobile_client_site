import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../utilites/Loader/Loading';

const AdminRoute = ({ children }) => {

    const { user, loading, userLogOut } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className='max-h-full max-w-full flex justify-center '>
            <Loading></Loading>
        </div>
    }

    if (user && isAdmin) {
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

export default AdminRoute;