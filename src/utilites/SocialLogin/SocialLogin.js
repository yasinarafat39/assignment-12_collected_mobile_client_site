import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const { googleLogin, facebookLogin } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }

    const role = 'Buyer';
    const status = 'unverified';

    // Google Login system
    const handleGoogleLogin = () => {
        googleLogin()
            .then(userCredential => {
                const user = userCredential.user;
                setUserEmail(user.email);
                console.log(user);
                saveUser(user.displayName, user.email, role);
                toast.success("Login Success");
               
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // Facebook Login system
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(userCredential => {
                const user = userCredential.user;
                setUserEmail(user.email);
                console.log(user);
                saveUser(user.displayName, user.email, role);
                toast.success('Login Success');
                
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const saveUser = (name, email, role) => {

        const user = { name, email, role, status }

        fetch(' http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    return (
        <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                <FaGoogle className='text-3xl '></FaGoogle>
            </button>
            <button onClick={handleFacebookLogin} aria-label="Log in with Facebook" className="p-3 rounded-sm">
                <FaFacebook className='text-3xl '></FaFacebook>
            </button>

        </div>
    );
};

export default SocialLogin;