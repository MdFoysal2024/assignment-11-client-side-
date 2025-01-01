import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../providers/AuthProvider';

const UpdateMarathon = () => {
    const { id } = useParams();
    console.log(id)


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [marathonDate, setMarathonDate] = useState(new Date());

    // const { user } = useContext(AuthContext);
    // console.log(user.email)
    const navigate = useNavigate()


    const [updateMarathon, setUpdateMarathon] = useState({})



    useEffect(() => {
        fetch(`https://marathon-events-server.vercel.app/marathonData/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdateMarathon(data)
                // console.log(data)
            })

    }, [])

    console.log(updateMarathon)
    // /updateMarathon

    const { title, marathon_img, location, description, start_Date, end_Date, marathon_Date, running_distance } = updateMarathon || {}

    const handleUpdateMarathon = async (e) => {

        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const marathon_img = form.marathon_img.value;
        const location = form.location.value;
        const description = form.description.value;
        const start_Date = startDate;
        const end_Date = endDate;
        const marathon_Date = marathonDate;
        const running_distance = form.running_distance.value;

        console.log({ title, marathon_img, location, description, start_Date, end_Date, marathon_Date, running_distance });

        const marathonData = {
            title,
            marathon_img,
            location,
            description,
            start_Date,
            end_Date,
            marathon_Date,
            running_distance,


        };

        console.log(marathonData);



        fetch(`https://marathon-events-server.vercel.app/updateMarathon/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(marathonData)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Marathon Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank You'
                    })
                }
                navigate('/my_marathon_List')

            })








    }





    return (
        <div className='w-full md:w-2/3 lg:w-1/2 mx-auto bg-neutral-300 p-12 my-16' >

            <h2 className="text-center mx-auto  mt-6 p-4 text-3xl md:text-3xl lg:text-5xl font-bold">Update <span className='text-orange-600'>Marathon</span> </h2>



            <form
                onSubmit={handleUpdateMarathon}
                className="card-body">
                {/* Marathon Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Title:</span>
                    </label>
                    <input type="text" name="title" defaultValue={title} placeholder="Marathon Title Here..." className="input input-bordered" required />
                </div>



                {/* Marathon Image*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Image URL:</span>
                    </label>
                    <input type="text" defaultValue={marathon_img} placeholder="Marathon Image URL" name="marathon_img" className="input input-bordered" required />

                </div>


                {/* Marathon Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Location:</span>
                    </label>
                    <input type="text" defaultValue={location} placeholder="Marathon start Location" name="location" className="input input-bordered" required />

                </div>



                {/* Marathon description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Description: </span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" defaultValue={description} placeholder="Marathon Description" required></textarea>
                </div>





                <div className="grid w-full grid-cols-1 gap-4 items-center lg:grid-cols-2">

                    {/* Start Registration Date */}
                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700'>Start Registration Date:
                        </label>

                        {/* Date Picker Input Field */}
                        <DatePicker
                            className='border p-2 w-full rounded-md'
                            selected={startDate} //--->name = {startDate} is dynamic value
                            // defaultValue={marathon_Date}
                            onChange={date => setStartDate(date)}
                        // ক্যালেন্ডারের তারিখে onChange/ক্লিক করলে setStartDate(date) এ 
                        // নতুন ডেট সেট হবে যেটা পুনরায় {startDate} এর ভিতরে সেট হবে।
                        />
                    </div>



                    {/* End Registration Date */}

                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700'>End Registration Date:
                        </label>

                        {/* Date Picker Input Field */}
                        <DatePicker
                            className='border p-2 w-full rounded-md'
                            selected={endDate} //--->name = {startDate} is dynamic value
                            onChange={date => setEndDate(date)}
                        // ক্যালেন্ডারের তারিখে onChange/ক্লিক করলে setStartDate(date) এ 
                        // নতুন ডেট সেট হবে যেটা পুনরায় {startDate} এর ভিতরে সেট হবে।
                        />
                    </div>

                    {/* Marathon Start Date */}

                    <div className='flex flex-col  gap-2 '>
                        <label className='text-gray-700'>Marathon Start Date:
                        </label>

                        {/* Date Picker Input Field */}
                        <DatePicker
                            className='border p-2 w-full rounded-md'
                            selected={marathonDate} //--->name = {startDate} is dynamic value
                            onChange={date => setMarathonDate(date)}
                        // ক্যালেন্ডারের তারিখে onChange/ক্লিক করলে setStartDate(date) এ 
                        // নতুন ডেট সেট হবে যেটা পুনরায় {startDate} এর ভিতরে সেট হবে।
                        />
                    </div>

                    {/* Running distance*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Running distance:</span>
                        </label>
                        <select name="running_distance" className="select select-bordered  w-full ">

                            <option value="25k">25k</option>
                            <option value="10k">10k</option>
                            <option value="3k">3k</option>

                        </select>

                    </div>



                </div>





























































                {/* Submit btn */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn text-white text-xl bg-orange-600 hover:bg-orange-800">Update Now</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMarathon;