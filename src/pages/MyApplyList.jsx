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
import { FaSearch } from 'react-icons/fa';
//import useAxiosSecure from '../hooks/useAxiosSecure';

const MyApplyList = () => {
    //myApplyList


    //const axiosSecure = useAxiosSecure();

    const [marathonApply, setMarathonApply] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user.email)


    const [search, setSearch] = useState('');


    useEffect(() => {


        // fetch(`https://marathon-events-server.vercel.app/myApplyList?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setMarathonApply(data)
        //     })



        // Used axios for advance & shortcut data loading system--->

        const fetchAllMarathons = async () => {
            const { data } = await axios.get(`http://localhost:5000/myApplyList?email=${user?.email}&search=${search}`)
            setMarathonApply(data)
        }

        fetchAllMarathons()



        // axiosSecure.get(`/myApplyList?email=${user?.email}`)
        // .then(res => {
        //     console.log(setMarathonApply(res.data))
        //     console.log(res.data.data)
        // })


    }, [user?.email, search])

    //console.log(marathonApply)





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


            <div className='flex justify-center mb-8'>
                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2   lg:w-[640px] text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        onChange={e => setSearch(e.target.value)}
                        //onBlur={e => setSearch(e.target.value)}
                        placeholder='Search...'
                        aria-label='Enter Job Title'
                    />

                    <button className='px-4 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-800 focus:bg-gray-600 focus:outline-none'>
                        <FaSearch />
                    </button>
                </div>
            </div>


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





                                    <td className='flex'>


                                        <Link to={`/update_application/${apply._id}`}>

                                            <button className="btn text-blue-950 text-lg"
                                                
                                            ><GrEdit /></button>
                                        </Link>









                                        <button
                                            onClick={() => handleDelete(apply._id)}
                                            className="btn ml-2 text-red-600 text-xl"><MdDeleteForever /></button>
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