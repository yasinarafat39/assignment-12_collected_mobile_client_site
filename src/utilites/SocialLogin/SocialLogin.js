import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleLogin, facebookLogin } = useContext(AuthContext);
    const navigate = useNavigate();


    const roll = 'Buyer';


    // Google Login system
    const handleGoogleLogin = () => {
        googleLogin()
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                saveUser(user.displayName, user.email, roll);
                toast.success("Login Success");
                navigate('/');
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
                console.log(user);
                saveUser(user.displayName, user.email, roll);
                toast.success('Login Success');
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const saveUser = (name, email, roll) => {

        const user = { name, email, roll }

        fetch('http://localhost:5000/users', {
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