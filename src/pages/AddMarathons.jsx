import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast'
import axios from 'axios';


const AddMarathons = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [marathonDate, setMarathonDate] = useState(new Date());

    const { user } = useContext(AuthContext);
    console.log(user.email)
    const navigate = useNavigate()


    const handleAddMarathon = async (e) => {

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

        const formData = {
            title,
            marathon_img,
            location,
            description,
            start_Date,
            end_Date,
            marathon_Date,
            running_distance,
            user_name:user.displayName,
            user_email:user.email,
            createdAt: new Date(),
            registration_count: 0, //-->input field ছাড়া একটি ইনিসিয়াল ভ্যলু
        };

        console.log(formData);



        //--------------- data fetching system-01 ----------------------->

        //----------->axios  দিয়ে নতুন নিয়মে ডাটা ফেচিং
        //{import.meta.env.VITE_API_URL} --> http://localhost:9000 এই লোকাল হোস্ট লিংক কে
        // .env.local ফাইলের ভিতরে সেভ করে রাখা হয়েছে যাতে, সেখান থেকে সব জায়গাতে ডায়নামিক ভাবে {import.meta.env.VITE_API_URL} এই অংশ দিয়ে ইমপোর্ট করা যাবে, এবং পরবর্তিতে সার্ভারের ডিপ্লোয় লিংককে শুধু মাত্র .env.local ফাইলের ভিতরে এক জায়গাতে পরিবর্তন করলেই হবে ।

        // const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-job`, formData)

        // console.log(data)

        //{ data } --->axios এর ভিতরে ডাটা গুলো অবজেক্ট আকারে (data.data) নামক প্রপার্টির মধ্যে থাকে তাই সরাসরি ডাটা পেতেই const এর পরে ডাটা কে  { data } ডিস্টাকচার করে লেখা হয়েছে । আর যদি const এর পরে ডাটা কে { data } ডিস্টাকচার করে না লিখে const data =()=>{} দেই তাহলে console.log() এর ভিতরে console.log(data.data); দিতে হবে।

        //----------------------------------------------------------------->





        //--------------------- data fetching system-02 ---------------------->


        //-->toast ব্যবহার করার জন্য axios কে উপরের লাইনের ভেরিয়েবল const { data } এর ভিতরে না রেখে try/catch এর ভিতরে রাখা হলো । 


        try {
          //data post request--->
          //await axios.post(`${import.meta.env.VITE_API_URL}/add-job`, formData)
          await axios.post('http://localhost:5000/marathons', formData)

          //form reset--->
        //   form.reset();

          //show toast & navigate to my-posted-jobs route --->
          toast.success('Marathon Added Successfully!!!');
          navigate('/my_marathon_List');

        }

        catch (err) {
          console.log(err);
          //toast.error('Something went wrong!!!');
          toast.error(err.message);
        }

    }






    return (
        <div className='w-full md:w-2/3 lg:w-1/2 mx-auto bg-neutral-300 p-12 my-16' >

            <h2 className="text-center mx-auto  mt-6 p-4 text-3xl md:text-3xl lg:text-4xl font-bold">Post A New <span className='text-orange-600'>Marathon</span> </h2>



            <form
                onSubmit={handleAddMarathon}
                className="card-body">
                {/* Marathon Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Title:</span>
                    </label>
                    <input type="text" name="title" placeholder="Marathon Title Here..." className="input input-bordered" required />
                </div>



                {/* Marathon Image*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Image URL:</span>
                    </label>
                    <input type="text" placeholder="Marathon Image URL" name="marathon_img" className="input input-bordered" required />

                </div>


                {/* Marathon Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Location:</span>
                    </label>
                    <input type="text" placeholder="Marathon start Location" name="location" className="input input-bordered" required />

                </div>



                {/* Marathon description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Marathon Description: </span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" placeholder="Marathon Description" required></textarea>
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
                    <button type="submit" className="btn text-white text-xl bg-orange-600 hover:bg-orange-800">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddMarathons;