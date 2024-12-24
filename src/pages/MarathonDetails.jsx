import { format } from 'date-fns';
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
        registration_count,
        user_email,
        user_name

    } = marathonData || {}


    const handleMarathonApply = e => {
        e.targetDefault()
        console.log('Apply Marathon')
    }


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
                                        <p><span className='font-bold text-lg'>Registration Start: </span>{format(new Date(start_Date), 'P')}</p>
                                        <p><span className='font-bold text-lg'>Registration End: </span>
                                            {format(new Date(end_Date), 'P')}</p>
                                        <p><span className='font-bold text-lg'>Marathon Start: </span>
                                            {format(new Date(marathon_Date), 'P')}</p>
                                        <p><span className='font-bold text-lg'>Running Distance:  </span>
                                            {running_distance}</p>
                                        <p><span className='font-bold text-orange-600 text-lg'>Total Registration Count:  </span>
                                            <div className="badge badge-secondary">{registration_count}</div></p>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ---------------Marathon Apply Form-------------  */}
            <div className='w-[50%] mx-auto bg-slate-300 p-16 my-24 m'>
                <div>
                    <h2 className='text-4xl font-bold text-center pb-12'>

                        Apply For <span className="text-orange-600">Marathon</span>
                    </h2>
                </div>

                <form onSubmit={handleMarathonApply} className='space-y-4'>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name:</span>
                        </label>
                        <input type="text" name="title" defaultValue={user_name} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name:</span>
                        </label>
                        <input type="text" name="title" placeholder="Marathon Title Here..." className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Number:</span>
                        </label>
                        <input type="number" name="contact_number" placeholder="Your Contact Number Here..." className="input pr-8 input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location:</span>
                        </label>
                        <input type="text" name="location" placeholder="Your Location Number Here..." className="input pr-8 input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input type="email"  disabled={true} name="email" defaultValue={user_email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marathon Title:</span>
                        </label>
                        <input type="text"
                         name="title" 
                         defaultValue={title} 
                         disabled={true}
                         className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marathon Start Date:</span>
                        </label>
                        <input type="text" name="title"
                         disabled={true}
                         defaultValue={format(new Date(marathon_Date), 'P')} className="input input-bordered" required />
                    </div>




                    <div className="form-control mt-6">
                        <button className="btn  bg-orange-600 text-white text-lg">Apply Now</button>
                    </div>
                </form >
            </div>
        </div>
    );
};

export default MarathonDetails;