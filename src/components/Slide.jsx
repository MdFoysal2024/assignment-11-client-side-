import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>

          <div className='text-3xl font-bold text-white lg:text-5xl'>

            <motion.h1
              animate={{ y: -20 }}
              transition={{ duration: 5, delay: 1, repeat: Infinity }}
            > {text}</motion.h1>
          </div>

          {/* <h1 className='text-3xl font-bold text-white lg:text-5xl'>
            {text}
          </h1> */}


          <br />
          <Link
            to='/marathons'
            className='w-full px-5 py-3 mt-4 text-xl font-medium text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-orange-800  focus:outline-none focus:bg-gray-500'
          >
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
