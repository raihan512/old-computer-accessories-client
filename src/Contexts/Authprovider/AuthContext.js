import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthProvider = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const signUp = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const signIn = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const signout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => unsubscribe;
    }, [])

    const authInfo = {
        user,
        signUp,
        updateUser,
        googleLogin,
        signIn,
        signout,
        loading
    }
    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;