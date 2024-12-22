import React from 'react';
import logo from '../assets/marathon_logo.png'
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";




const Footer = () => {
    return (
        <div className="bg-[#0c1d35]">
            <footer className="footer w-10/12 mx-auto   py-24 text-white p-10">
                <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 w-full justify-center items-center lg:justify-between text-center">
                    <div>
                        <div className='lg:text-left '>
                            <a className="btn btn-ghost text-xl">
                                <img className="w-12 " src={logo} alt="" />
                                <h2 className="text-xl flex flex-col md:text-3xl font-extrabold">
                                    <span className="text-orange-600">MARATHON</span>
                                    <div className='flex justify-between'>
                                        <span className="text-white text-sm ">E </span>
                                        <span className="text-white text-sm ">V </span>
                                        <span className="text-white text-sm ">E </span>
                                        <span className="text-white text-sm ">N </span>
                                        <span className="text-white text-sm ">T </span>
                                        <span className="text-white text-sm ">S </span>

                                    </div>

                                </h2>
                            </a>
                        </div>
                        <p className='lg:text-left pt-4  text-gray-500'>Donations can be withdrawn after a three-day waiting period and are available for payout on a weekly, monthly, or direct basis. </p>

                        <div className='flex cursor-pointer gap-4 text-4xl justify-center lg:justify-start py-4'>
                            <IoLogoTwitter className='text-white bg-orange-600 p-2 ' />
                            <BsFacebook className='text-white bg-orange-600 p-2 ' />
                            <GrInstagram className='text-white bg-orange-600 p-2 ' />
                            <IoLogoLinkedin className='text-white bg-orange-600 p-2 ' />
                        </div>
                    </div>

                    <div className='lg:pl-24 text-center w-full lg:text-left'>
                        <h3 className="text-2xl text-orange-600 font-bold lg:text-left  pb-4 ">Company</h3>
                        <div className='text-gray-500 space-y-2'>

                            <p>About us</p>
                            <p>Latest events</p>
                            <p>How It Works</p>
                            <p>News & articles</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                    <div className='text-center  w-full lg:text-left'>
                        <h3 className="text-2xl text-orange-600 font-bold lg:text-left pb-4">Fundraising</h3>
                        <div className='text-gray-500 space-y-2'>
                            <p>Education</p>
                            <p>Design</p>
                            <p>Film & Video</p>
                            <p>Technology</p>
                            <p>Games</p>
                        </div>
                    </div>
                    <div className='space-y-2 text-center w-full lg:text-left'>
                        <h3 className="text-2xl text-orange-600 font-bold lg:text-left pb-4">Contact</h3>
                        <div className='flex gap-2 items-center justify-center lg:justify-start'>
                            <LuPhoneCall className='text-xl' />
                            <p className='text-gray-500 space-y-2'>+00 666 888 0000</p>
                        </div>
                        <div className='flex gap-2 items-center justify-center lg:justify-start'>
                            <HiOutlineMailOpen className='text-xl' />
                            <p className='text-gray-500 space-y-2'>needhelp@potisen.com</p>
                        </div>
                        <div className='flex gap-2 items-center justify-center lg:justify-start'>
                            <GrLocation className='text-xl' />
                            <p className='text-gray-500 space-y-2'>22 Broklyn Street New York USA</p>
                        </div>

                        <label className="input input-bordered flex items-center gap-2 rounded-none">

                            <MdEmail className='text-[#212b3b] text-xl' />
                            <input type="email" name="email" className="grow rounded-none" placeholder="Enter E-mail Address" />
                        </label>

                    </div>

                </div>

            </footer>

            <hr className=' border-1 border-gray-600 ' />
            <p className='text-gray-500 text-center py-10'>© Copyright 2024 by Gaviasthemes</p>
        </div>
    );
};

export default Footer;