import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

const MarathonCard = ({ marathon }) => {

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

    } = marathon || {}


    return (
        <div>
            <div className="card bg-gray-200 rounded-none  ">
                <figure className="px-10 pt-10">
                    <img
                        src={marathon_img}
                        alt="image"
                        className="w-[360px]" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className=" text-left text-2xl font-bold text-blue-950 uppercase">{title}</h2>
                    <h3 className="text-lg text-gray-500 font-semibold">
                        <span className=" text-orange-600  text-xl font-bold">Registration Dates: </span> {format(new Date(start_Date), 'P')} to {format(new Date(end_Date), 'P')} </h3>
                  
                        

                    <p className="text-gray-500 py-2"><span className='font-bold text-blue-950 '>Location:</span> {location}</p>
                    <div className="card-actions">
                        <Link to={`/marathon_details/${_id}`}>
                            <button className='bg-orange-600  font-bold text-white py-2 px-8 cursor-pointer 
                        
                        '>See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;