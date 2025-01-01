import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateApplication = () => {
    const { id } = useParams();
    console.log(id)





    const navigate = useNavigate()


    const [updateApplication, setUpdateApplication] = useState({})



    useEffect(() => {
        fetch(`https://marathon-events-server.vercel.app/myApplyList/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdateApplication(data)
                // console.log(data)
            })

    }, [])

    console.log(updateApplication)


    const {
        first_name,
        last_name,
        contact_number,
        runner_age,
        location,
        email,
        title,
        marathon_Date,
        marathon_id
    } = updateApplication;

    console.log(marathon_Date);
















    //Application Update functionality


    const handleUpdateApplication = async (e) => {

        console.log('Update Application')
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



        fetch(`https://marathon-events-server.vercel.app/updateApplication/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(formData)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Application Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank You'
                    })
                }
                navigate('/my_apply_List')

            })



    }


    return (
        <div>
            {/* ---------------Marathon Application Update Form-------------  */}
            <div id='registration' className='w-[80%]  md:w-[80%]  xl:w-[70%] mx-auto bg-slate-200 p-16 my-24 m'>
                <div>
                    <h2 className='text-4xl font-bold text-center pb-12'>

                        Update <span className="text-orange-600">Application</span>
                    </h2>
                </div>

                <form onSubmit={handleUpdateApplication} className='space-y-4'>

                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-8'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name:</span>
                            </label>
                            <input type="text" name="first_name" defaultValue={first_name} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name:</span>
                            </label>
                            <input type="text" name="last_name" defaultValue={last_name} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number:</span>
                            </label>
                            <input type="number" name="contact_number" defaultValue={contact_number} className="input pr-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age Of Runners:</span>
                            </label>
                            <input type="number" name="runner_age" defaultValue={runner_age} className="input pr-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location:</span>
                            </label>
                            <input type="text" name="location" defaultValue={location} className="input pr-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input type="email" disabled={true} defaultValue={email} name="email" className="input input-bordered" required />
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
                                // defaultValue={format(new Date(marathon_Date), 'P')}
                                defaultValue={marathon_Date}
                                className="input input-bordered" required />
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

export default UpdateApplication;