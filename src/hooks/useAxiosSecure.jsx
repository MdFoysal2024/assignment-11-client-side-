import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'http://localhost:5000',
    withCredentials: true
})



const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);   //used ----> custom hook
    const navigate = useNavigate();



    useEffect(() => {


        // Documentation টি https://axios-http.com/docs/interceptors সাইট থেকে নেয়া।

        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('Error Caught in interceptor', error.status);

            if (error.status === 401 || error.status === 403) {
                console.log('Log Out the User');


                // user logout documentation-------->

                logOut()
                    .then(() => {
                        console.log('successfully signout')
                        navigate('/login')


                    })
                    .catch(error => {
                        console.log('Sign out failed', error)
                    })

            }

            return Promise.reject(error);
        })

    }, [])




    return axiosInstance;
};

export default useAxiosSecure;