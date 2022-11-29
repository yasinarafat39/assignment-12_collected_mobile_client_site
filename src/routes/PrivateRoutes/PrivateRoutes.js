import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../utilites/Loader/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='max-h-full max-w-full flex justify-center '>
            <Loading></Loading>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;