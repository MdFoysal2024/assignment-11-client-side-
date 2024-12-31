import axios from 'axios';
import { compareAsc, format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Display from './Display';

const MarathonDetails = () => {


    //DeadLine Crose Validation---->
    //registration btn conditional state
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {

        // DeadLine Crose Validation
        if (compareAsc(new Date(), new Date(end_Date)) === 1) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }

    }, []);







    const marathonData = useLoaderData()
    console.log(marathonData);
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const {
        _id,
        title,
        marathon_img,
        location,
        description,
        start_Date,
        end_Date,
        marathon_Date,
        running_distance,
        registration_count,
        user_email,
        user_name,

        createdAt


    } = marathonData || {}




    console.log(user_email)


    // ----------------countdown---------->
    const endTime = new Date(end_Date).getTime();
    const [currentTime, setcurrentTime] = useState(new Date().getTime());
    const gap = endTime - currentTime; //177670892

    const seconds = 1000; // in milliseconds
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remainingDays = Math.floor(gap / days);
    const remainingHours = Math.floor((gap % days) / hours);
    const remainingMinutes = Math.floor((gap % hours) / minutes);
    const remainingSeconds = Math.floor((gap % minutes) / seconds);

    useEffect(() => {
        setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
    }, [currentTime]) // 11:30:55












    return (
        <div>
            <div></div>
            <div>
                <div className="w-10/12 mx-auto my-24">

                    <div className="hero bg-red-50  py-24">
                        <div className="hero-content flex-col items-start gap-24 lg:flex-row">

                            <div className='lg:w-1/2'>

                                <img
                                    src={marathon_img}
                                    className=" w-full p-12" />
                            </div>
                            <div className='lg:w-1/2 px-6'>
                                <div className='space-y-4'>

                                    <h1 className="text-5xl text-orange-600 font-bold pb-8">{title}</h1>
                                    <h3 className='text-2xl font-bold'>{location}</h3>

                                    <p className="py-4    font-medium">
                                        <span className='font-bold text-lg '>Description: </span>
                                        {description}
                                    </p>
                                    <div className='flex flex-col space-y-2 pb-4 justify-between'>
                                        <div className='flex justify-between'>
                                            {/* date section */}
                                            <div>

                                                <p><span className='font-bold text-lg'>Registration Start: </span>{format(new Date(start_Date), 'P')}</p>
                                                <p><span className='font-bold text-lg'>Registration End: </span>
                                                    {format(new Date(end_Date), 'P')}</p>
                                                <p><span className='font-bold text-lg'>Marathon Start: </span>
                                                    {format(new Date(marathon_Date), 'P')}</p>
                                                <p><span className='font-bold text-lg'>Created At Date: </span>
                                                    {format(new Date(
                                                        createdAt
                                                    ), 'P')}</p>
                                            </div>

                                          

                                          


                                        </div>



                                        <p><span className='font-bold text-lg'>Running Distance:  </span>
                                            {running_distance}</p>
                                        <p><span className='font-bold  text-orange-600 text-lg'>Total Registration :  </span>
                                            <div className="badge badge-secondary">{registration_count}</div></p>


                                        <Link to={`/marathonRegistration/${_id}`}>

                                            <button className='mb-6 btn w-full font-bold text-lg text-white bg-orange-600 hover:bg-orange-800' disabled={isDisabled}>
                                                {isDisabled ? "Registration Closed" : "Register Now"}
                                            </button>
                                        </Link>
                                        {/* <button className=' btn w-full bg-orange-600 hover:bg-orange-800 font-bold text-lg text-white '>Registration</button> */}


                                        {/* // -----------countdown----------> */}
                                        <div>
                                            <center>



                                                <Display
                                                    days={remainingDays}
                                                    hours={remainingHours} 
                                                    minutes={remainingMinutes}
                                                    seconds={remainingSeconds}
                                                    disabled={isDisabled}

                                                >

                                                </Display>

                                            </center>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default MarathonDetails;