import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import { GrEdit } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import toast from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2';
//import useAxiosSecure from '../hooks/useAxiosSecure';

const MyApplyList = () => {
    //myApplyList


    //const axiosSecure = useAxiosSecure();

    const [marathonApply, setMarathonApply] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user.email)
    useEffect(() => {


        fetch(`https://marathon-events-server.vercel.app/myApplyList?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMarathonApply(data)
            })



        // axiosSecure.get(`/myApplyList?email=${user?.email}`)
        // .then(res => {
        //     console.log(setMarathonApply(res.data))
        //     console.log(res.data.data)
        // })






    }, [user?.email])
    // console.log(marathonApply)




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



        // try {
        //     //data post request--->
        //     
        //     await axios.post('https://marathon-events-server.vercel.app/updateApplication/', formData)

        //     //form reset--->
        //     //   form.reset();

        //     //show toast & navigate to my-posted-jobs route --->
        //     toast.success('Application Update Successfully!!!');


        // }

        // catch (err) {
        //     console.log(err);
        //     //toast.error('Something went wrong!!!');
        //     toast.error(err.message);
        // }



    }






    //Application Delete functionality
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    console.log('Delete Confirmed');
                    fetch(`https://marathon-events-server.vercel.app/deleteApplication/${_id}`, {
                        method: "DELETE",

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Application Delete Successfully",
                                    icon: "success"
                                });


                                const remaining = marathonApply.filter(marathon => marathon._id !== _id)
                                setMarathonApply(remaining)
                            }
                        })
                }
            });

    }


    return (
        // <div>
        //     My Apply List here({marathonApply.length})
        // </div>

        <div className="w-10/12 mx-auto py-24 ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Apply</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className='text-center pb-12 text-5xl font-bold'>

                My <span className='text-orange-600'>Marathon Apply</span> Page
            </h2>

            {/* user info({users.length}) */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-orange-600 text-lg text-white '>
                            <th className='py-6  pl-8'>No</th>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Marathon Title</th>
                            <th>Marathon Start Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            marathonApply?.map((apply, idx) =>
                                <tr className='bg-slate-300  text-lg' key={apply._id}>
                                    <th className='pl-8'>{idx + 1}</th>

                                    <td>{apply.first_name}</td>
                                   
                                    <td>{apply.email}</td>
                                    <td className='font-bold'>{apply.title}</td>


                                    <td>{format(new Date(apply.marathon_Date
                                    ), 'P')}   </td>





                                    <td className='flex' to={`${apply._id}`}>
                            
                                            <button className="btn text-blue-950 text-lg"
                                                onClick={() => document.getElementById('my_modal_1').showModal()}
                                            ><GrEdit /></button>
                                       

                                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                                        <dialog id="my_modal_1" className="modal w-[640px] mx-auto ">
                                            <div className="modal-box flex items-end gap-4 pl-8">


                                                <form onSubmit={handleUpdateApplication} className='space-y-4'>

                                                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-8'>

                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">First Name:</span>
                                                            </label>

                                                            <input type="text" name="first_name" className="input input-bordered"
                                                           
                                                                placeholder='First Name' required />
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

                                                            <input type="email" disabled={true}
                                                                defaultValue={user.email}
                                                                name="email" className="input input-bordered" required />
                                                        </div>

                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Marathon Title:</span>
                                                            </label>
                                                            {/* defaultValue={title} */}
                                                            <input type="text"
                                                                name="title"
                                                                defaultValue={`${apply.title}`}
                                                                // disabled={true}
                                                                className="input input-bordered" required />
                                                        </div>


                                                        {/* defaultValue={format(new Date(apply.marathon_Date), 'P')}  */}
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Marathon Start Date:</span>
                                                            </label>
                                                            <input type="text" name="marathon_Date"
                                                                disabled={true}
                                                                defaultValue={format(new Date(apply.marathon_Date), 'P')}
                                                                className="input input-bordered" required />
                                                        </div>
                                                    </div>


                                                    {/* <div className="form-control " >
                                                        <button className="btn  bg-orange-600 hover:bg-orange-800 text-white text-lg">Apply Now</button>

                                                        <div className="modal-action  flex justify-center " type='submit'>
                                                            <form method="dialog">
                                                    
                                                                <button className="btn  bg-blue-950 px-12 hover:bg-orange-800 text-white  text-lg">Close</button>
                                                            </form>
                                                        </div>

                                                    </div> */}

                                                    <div className="modal-action">
                                                        <button
                                                            className="btn btn-primary"
                                                            onClick={() => {
                                                                // Add save logic here
                                                                // alert('Saved!');
                                                                document.getElementById('my_modal_1').close();
                                                            }}
                                                        >
                                                            Update
                                                        </button>

                                                    </div>

                                                    {/* <div className="form-control " >

                                                        <div className="modal-action  flex justify-center " type='submit'>
                                                            <form method="dialog">
                                                                
                                                                <button className="btn  bg-orange-600 hover:bg-orange-800 text-white  text-lg">Apply Now</button>
                                                            </form>
                                                        </div>

                                                    </div> */}

                                                </form >
                                                <div className='flex justify-center '>

                                                    <button
                                                        className="btn btn-secondary btn-end"
                                                        onClick={() => document.getElementById('my_modal_1').close()}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>

                                            </div>
                                        </dialog>








                                        <button
                                            onClick={() => handleDelete(apply._id)}
                                            className="btn ml-2 text-red-500 text-xl"><MdDeleteForever /></button>
                                    </td>

                                </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MyApplyList;