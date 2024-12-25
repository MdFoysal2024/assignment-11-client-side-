import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const MarathonDetails = () => {
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
        user_name

    } = marathonData || {}

    console.log(user_email)

    const handleMarathonApply = async (e) => {

        console.log('Apply Marathon')
        e.preventDefault();
        const form = e.target;

        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const contact_number = form.contact_number.value;
        const runner_age = form.runner_age.value;
        const location = form.location.value;
        const email = form.email.value;
        const title = form.title.value;
        const marathon_Date = form.marathon_Date.value;;

        console.log({
            first_name,
            last_name,
            contact_number,
            runner_age,
            location,
            email,
            title,
            marathon_Date,
        });

        const formData = {
            first_name,
            last_name,
            contact_number,
            runner_age,
            location,
            email,
            title,
            marathon_Date,

        };

        console.log(formData);



        try {
            //data post request--->
            //await axios.post(`${import.meta.env.VITE_API_URL}/add-job`, formData)
            await axios.post('https://marathon-events-server.vercel.app/marathonApply', formData)

            //form reset--->
            //   form.reset();

            //show toast & navigate to my-posted-jobs route --->
            toast.success('Application Added Successfully!!!');
            navigate('/my_apply_List');

        }

        catch (err) {
            console.log(err);
            //toast.error('Something went wrong!!!');
            toast.error(err.message);
        }


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
            <div className='w-[80%]  md:w-[80%]  xl:w-[70%] mx-auto bg-slate-200 p-16 my-24 m'>
                <div>
                    <h2 className='text-4xl font-bold text-center pb-12'>

                        Apply For <span className="text-orange-600">Marathon</span>
                    </h2>
                </div>

                <form onSubmit={handleMarathonApply} className='space-y-4'>

                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-8'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name:</span>
                            </label>
                            <input type="text" name="first_name" defaultValue={user_name} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name:</span>
                            </label>
                            <input type="text" name="last_name" placeholder="Last Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number:</span>
                            </label>
                            <input type="number" name="contact_number" placeholder="Your Contact Number Here..." className="input pr-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age Of Runners:</span>
                            </label>
                            <input type="number" name="runner_age" placeholder="Your age here" className="input pr-8 input-bordered" required />
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
                            <input type="email" disabled={true} name="email" defaultValue={user.email} className="input input-bordered" required />
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
                            <input type="text" name="marathon_Date"
                                disabled={true}
                                defaultValue={format(new Date(marathon_Date), 'P')} className="input input-bordered" required />
                        </div>
                    </div>



                    <div className="form-control ">
                        <button className="btn  bg-orange-600 hover:bg-orange-800 text-white text-lg">Apply Now</button>
                    </div>
                </form >

            </div>
        </div>
    );
};

export default MarathonDetails;