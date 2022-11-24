import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className="flex justify-center space-x-4">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
                <FaGoogle className='text-3xl '></FaGoogle>
            </button>
            <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                <FaFacebook className='text-3xl '></FaFacebook>
            </button>

        </div>
    );
};

export default SocialLogin;