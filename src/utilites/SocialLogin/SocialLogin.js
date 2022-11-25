import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);


    const handleGoogleLogin = () => {
        googleLogin()
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                toast.success("Login Success")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                <FaGoogle className='text-3xl '></FaGoogle>
            </button>
            <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                <FaFacebook className='text-3xl '></FaFacebook>
            </button>

        </div>
    );
};

export default SocialLogin;