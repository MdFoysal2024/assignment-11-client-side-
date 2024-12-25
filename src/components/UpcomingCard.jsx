import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const UpcomingCard = ({ card }) => {
    const { image, title, location, budget } = card || {};
    return (
        <div className='flex gap-4 bg-slate-300 p-6'>
            <img src={image} alt="" className='w-[240px] h-[160px]' />

            <div className='text-gray-600 space-y-2'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <p className='flex items-center gap-2'><FaLocationDot />{location} <span className='text-gray-500'></span></p>
                <p className='flex items-center gap-2'><FaCalendarAlt /> <span className='text-white font-semibold bg-orange-600 px-2 rounded-full'>Upcoming</span></p>
                <p>Starting at:<span className='text-gray-500'>{budget}</span></p>
            </div>

        </div>
    );
};

export default UpcomingCard;