import React from 'react';
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { IoPersonCircleOutline } from "react-icons/io5";
import logo from '../assets/marathon_logo.png'



const Navbar = () => {




    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])





    const handleToggle = e => {
        // console.log((e.target.checked))
        if (e.target.checked) {
            setTheme('retro');
        }
        else {
            setTheme('light');
        }
    }

    // console.log(theme)


    const links = <>
        <li ><NavLink to='/' style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: isActive ? "orangered" : "black", backgroundColor: isActive ? "rgb(248, 248, 240)" : "", textDecoration: isActive ? "underline" :""})}>Home</NavLink></li>

        <li ><NavLink to='/marathons' 
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: isActive ? "orangered" : "black", backgroundColor: isActive ? "rgb(248, 248, 240)" : "", textDecoration: isActive ? "underline" :""})}
        >Marathons</NavLink></li>

        {
            user && user?.email ?
                <>
                    <li className='mx-4'>
                        <details >
                            <summary>Dashboard</summary>
                            <ul className="bg-base-100 w-[180px] rounded-t-none p-2">
                                
                                <li ><NavLink to='/add_marathons'
                                style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: isActive ? "orangered" : "black", backgroundColor: isActive ? "rgb(248, 248, 240)" : "", textDecoration: isActive ? "underline" :""})}
                                >Add Marathons</NavLink></li>

                                <li ><NavLink to='/my_marathon_List'
                                style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: isActive ? "orangered" : "black", backgroundColor: isActive ? "rgb(248, 248, 240)" : "", textDecoration: isActive ? "underline" :""})}
                                >My Marathon List</NavLink></li>

                                <li ><NavLink to='/my_apply_List'
                                style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: isActive ? "orangered" : "black", backgroundColor: isActive ? "rgb(248, 248, 240)" : "", textDecoration: isActive ? "underline" :""})}
                                >My Apply List</NavLink></li>
                               
                            </ul>
                        </details>
                    </li>
                </>
                :
                <> </>
        }



    </>
    return (
        <div className=" bg-slate-100  shadow-lg">

            <div className="navbar py-4 w-10/12 mx-auto text-[#212b3b]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl">
                        <img className="w-12 " src={logo} alt="" />
                        <h2 className="text-xl flex flex-col md:text-3xl font-extrabold">
                            <span className="text-orange-600">MARATHON</span>
                            <div className='flex justify-between'>
                                <span className="text-blue-950 text-sm ">E </span>
                                <span className="text-blue-950 text-sm ">V </span>
                                <span className="text-blue-950 text-sm ">E </span>
                                <span className="text-blue-950 text-sm ">N </span>
                                <span className="text-blue-950 text-sm ">T </span>
                                <span className="text-blue-950 text-sm ">S </span>

                            </div>

                        </h2>
                    </a>
                </div>

                {/* <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div> */}


                <div className="navbar-end ">
                    <ul className="menu hidden text-base lg:flex menu-horizontal px-1">
                        {links}
                    </ul>
                    <label className="cursor-pointer mr-6 grid place-items-center">
                        <input
                            onChange={handleToggle}
                            type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>

                    {
                        user && user?.email ?


                            <>
                                <div>
                                    {/* className="tooltip" data-tip="Home" */}
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="tooltip tooltip-right" data-tip="User Info" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                        <img className="w-12  mt-2 border-2 border-white rounded-full  " src={user?.photoURL} alt="" />
                                    </button>
                                    <dialog id="my_modal_5" className=" modal flex  justify-end  w-[360px] modal-top ">
                                        <div className="bg-white px-8 py-12">
                                            <img className="w-16 mb-6  mx-auto rounded-full" src={user?.photoURL} alt="" />
                                            <h3 className="font-bold text-center text-black text-lg">{user?.displayName}</h3>
                                            <p className="py-4  text-center text-black">{user?.email}</p>
                                            <div className=" text-center ">

                                                <Link to="/login">
                                                    <button onClick={logOut} className='  bg-[#394c69] text-lg  text-white font-extrabold 
                                                hover:bg-[#171e2b]
                                            
                                                rounded-none px-6 py-2'>Log-Out</button>
                                                </Link>

                                            </div>

                                            <div className="text-center">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn mt-6">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>






                                {/*                                
                                <span>{user?.email}</span>
                                <span>{user?.displayName}</span>
                                <button onClick={logOut} className='btn btn-warning text-lg font-extrabold rounded-none px-6'>Log-Out</button> */}

                            </>
                            :
                            (<Link to='/login' className='btn text-3xl bg-slate-300 font-bold rounded-full '><IoPersonCircleOutline /></Link>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;