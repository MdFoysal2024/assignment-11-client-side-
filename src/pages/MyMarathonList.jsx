import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import useAxiosSecure from '../hooks/useAxiosSecure';







const MyMarathonList = () => {
    const [marathons, setMarathons] = useState([]);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {


        // fetch(`https://marathon-events-server.vercel.app/myMarathonList?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setMarathons(data)
        //     })

        // fetch এর পরিবর্তে axios এর কাস্টম হুক দিয়ে
        //const axiosSecure = useAxiosSecure() ------>custom hook উপরে আছে
        
        axiosSecure.get(`/myMarathonList?email=${user.email}`)
            .then(res => {
                console.log(setMarathons(res.data))
            })


    }, [user.email])
    console.log(marathons)


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

    } = marathons || {}

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
                    fetch(`https://marathon-events-server.vercel.app/deleteMarathon/${_id}`, {
                        method: "DELETE",

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Campaign has been deleted.",
                                    icon: "success"
                                });


                                const remaining = marathons.filter(marathon => marathon._id !== _id)
                                setMarathons(remaining)
                            }
                        })
                }
            });

    }



    //My Marathons List here({marathon.length})
    return (
        <div className="w-10/12 mx-auto py-24 ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Marathon</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className='text-center pb-12 text-5xl font-bold'>

                My <span className='text-orange-600'>Marathon</span> Page
            </h2>

            {/* user info({users.length}) */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-slate-500 text-lg text-white '>
                            <th className='py-6 pl-8'>No</th>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Marathon Title</th>
                            <th>Registration Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            marathons.map((marathon, idx) =>
                                <tr className='bg-slate-300 text-lg' key={marathon._id}>
                                    <th className='pl-8'>{idx + 1}</th>

                                    <td>{marathon.user_name}</td>
                                    <td>{marathon.user_email}</td>
                                    <td className='font-bold'>{marathon.title}</td>


                                    <td>{format(new Date(marathon.start_Date), 'P')}  to  {format(new Date(marathon.end_Date), 'P')} </td>





                                    <td className='flex'>
                                        <Link to={`/update_Marathon/${marathon._id}`}>
                                            <button className="btn text-lg"><GrEdit /></button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(marathon._id)}
                                            className="btn ml-2 text-xl"><MdDeleteForever /></button>
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

export default MyMarathonList;