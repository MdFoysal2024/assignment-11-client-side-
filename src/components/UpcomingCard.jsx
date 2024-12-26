import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot, FaPersonRunning } from 'react-icons/fa6';

const UpcomingCard = ({ card }) => {
    const { image, title, location, budget, running_distance } = card || {};
    return (
        <div className='flex  flex-col md:flex-col lg:flex-row gap-4 items-center justify-center bg-slate-300 p-6'>
            <img src={image} alt="" className='w-[200px] h-[160px]' />

            <div className='text-gray-600 space-y-2'>
                <h2 className='text-xl font-bold text-orange-600'>{title}</h2>
                <p className='flex items-center gap-2'><FaLocationDot />{location} <span className='text-gray-500'></span></p>
                <p className='flex items-center gap-2'><FaPersonRunning />{running_distance} <span className='text-gray-500'></span></p>
                <p className='flex items-center gap-2'><FaCalendarAlt /> <span className='text-white font-semibold bg-orange-600 px-4 rounded-full '>Upcoming</span></p>
                <p>Starting at:<span className='text-orange-600 text-lg font-bold pl-2 '>{budget}$</span></p>
            </div>

        </div>
    );
};

export default UpcomingCard;