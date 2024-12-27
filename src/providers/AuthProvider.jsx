import React from 'react';

import { createContext, useEffect, useState } from 'react'

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,

} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import axios from 'axios';




export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()





const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log('CurrentUser-->', currentUser);
            // console.log('CurrentUser-->', currentUser.email);

            if (currentUser?.email) {

                const user = { email: currentUser.email }

                //-----------> jwt token create documentation-->

                axios.post('https://marathon-events-server.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('Login Create Token', res.data);
                        setLoading(false);
                    })
            }

            else {

                //---> jwt token remove documentation ‍after logout--->

                axios.post('https://marathon-events-server.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('Log Out Remove Token', res.data);
                        setLoading(false);
                    })
            }



        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
    }


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;