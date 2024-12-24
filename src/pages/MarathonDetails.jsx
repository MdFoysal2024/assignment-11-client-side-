import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MarathonDetails = () => {
    const marathonData = useLoaderData()
    console.log(marathonData);

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

    } = marathonData || {}

    return (
        <div>
            <div></div>




            <div>
                <div className="w-10/12 mx-auto py-24">

                    <div className="hero bg-red-50  py-24">
                        <div className="hero-content flex-col items-start gap-24 lg:flex-row">

                            <div className='lg:w-1/2'>

                                <img
                                    src={marathon_img}
                                    className=" w-full " />
                            </div>
                            <div className='lg:w-1/2'>
                                <div className='space-y-4'>

                                    <h1 className="text-5xl text-orange-600 font-bold pb-8">{title}</h1>
                                    <h3 className='text-2xl font-bold'>{location}</h3>

                                    <p className="py-4    font-medium">
                                        <span className='font-bold text-lg '>Description: </span>
                                        {description}
                                    </p>
                                    <div className='flex flex-col space-y-2 pb-4 justify-between'>
                                        <p><span className='font-bold text-lg'>Registration Start: </span>{start_Date}</p>
                                        <p><span className='font-bold text-lg'>Registration End: </span>{start_Date}</p>
                                        <p><span className='font-bold text-lg'>Marathon Start: </span>{start_Date}</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>

            {/* ---------------Marathon Apply Form-------------  */}
            <div>
                <h1>Apply Form</h1>
            </div>
        </div>
    );
};

export default MarathonDetails;