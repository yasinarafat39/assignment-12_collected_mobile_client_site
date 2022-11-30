import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update a user
    const updateUser = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // User Sign In Method
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Forget Password
    const handleForgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // user LogOut System
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // Facebook Login
    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        userSignIn,
        handleForgetPassword,
        userLogOut,
        googleLogin,
        facebookLogin
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;