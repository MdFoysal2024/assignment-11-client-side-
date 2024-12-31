import React from 'react';

const Display = ({ days, hours, minutes, seconds, isDisabled }) => {
    return (
        <div style={{ display: isDisabled ? "none" : "block" }}>

            {isDisabled ? " " : <>

                <table>
                    <tbody>
                        <tr>
                            <th className='bg-orange-800 text-white px-8 py-4 text-2xl'>{days}</th>&nbsp;&nbsp;
                            <th className='bg-orange-500 text-white px-8 py-4 text-2xl'>{hours}</th>&nbsp;&nbsp;
                            <th className='bg-orange-800 text-white px-8 py-4 text-2xl'>{minutes}</th>&nbsp;&nbsp;
                            <th className='bg-orange-500 text-white px-8 py-4 text-2xl'>{seconds}</th>&nbsp;&nbsp;
                        </tr>
                        <tr>
                            <td className='text-orange-600 font-bold'>DAYS</td>&nbsp;&nbsp;
                            <td className='text-orange-600 font-bold'>HOURS</td>&nbsp;&nbsp;
                            <td className='text-orange-600 font-bold'>MINUTES</td>&nbsp;&nbsp;
                            <td className='text-orange-600 font-bold'>SECONDS</td>&nbsp;&nbsp;
                        </tr>
                    </tbody>
                </table>
            </>


            }



        </div>
    );
};

export default Display;