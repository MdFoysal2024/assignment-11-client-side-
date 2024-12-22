import React from 'react';
import { useContext, useRef, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { sendPasswordResetEmail } from "firebase/auth";


// import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signIn, setUser, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);

    const navigate = useNavigate();

    const emailRef = useRef()



    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user
              
                setUser(user);
              
                Swal.fire({
                    title: 'Sign In',
                    text: 'Sign In Successfully',
                    icon: 'success',
                    confirmButtonText: 'Thank You'
                })


                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
               
                alert(error.code)
            });

    }


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                console.log(result.user);
                setUser(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log('ERROR', error)
                setUser(null);
            })
    }


    const handleForgetPassword = () => {
        console.log('get me email address', emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please Provide A valid email")
        }
        else {


            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password Reset email sent, check your email')
                })
        }
    }

    return (
        <div className=' max-w-lg space-y-4 p-12   my-12 bg-pink-100 shadow-lg mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h2 className='text-5xl font-bold text-center pb-6'>
<span className="text-orange-600"> Login </span>
                Now
                </h2>
            </div>


            <form onSubmit={handleLogin} className='space-y-4'>


                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" ref={emailRef} name="email" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="grow"
                        placeholder='password' required />
                    <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className="btn-xs text-xl">
                        {
                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                        }
                    </button>


                </label>
                <label onClick={handleForgetPassword}
                    className="label">
                    <a href="#" className="label-text-alt text-lg link link-hover font-semibold">Forgot password?</a>
                </label>


                <div className="form-control mt-6">
                    <button className="btn bg-orange-600 text-white text-lg">LOGIN</button>
                </div>
            </form >

            <p className="text-center font-bold">OR</p>
            <button
                onClick={handleGoogleLogin}
                className="btn w-full text-lg border-2 border-gray-300"><FcGoogle className=" text-2xl" />Sign in with Google</button>

            <p className='py-4 font-bold text-center'>New To The Website? please <Link to="/registration" className='text-orange-600 '>REGISTER</Link></p>
        </div>
    );
};

export default Login;