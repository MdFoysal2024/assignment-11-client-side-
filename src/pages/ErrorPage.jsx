import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div >
        <div className="w-10/12 mx-auto text-center py-24" >
            <div className=' w-[340px]  p-6 lg:w-[600px] shadow-lg space-y-4 mx-auto bg-slate-200'>
                <h2 className='text-7xl font-bold'>404</h2>
                <p className=' text-lg font-bold'>Sorry, This page is not Available here.</p>
                <Link to="/">
                    <button className='btn my-6 text-xl rounded-none btn-primary'>Go Home</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ErrorPage;