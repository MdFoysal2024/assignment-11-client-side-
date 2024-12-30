import React, { useEffect, useState } from 'react';
import MarathonCard from '../components/MarathonCard';

const Marathons = () => {

    const [marathons, setMarathons] = useState([]);
    //console.log(marathons);

    const [sortData, setSortData] = useState(marathons)


    const handleSort = sortBy => {
        if (sortBy == 'createdAt') {
            const sorted = [...sortData].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setSortData(sorted)
            console.log(sorted, 12)
        }

    }





    useEffect(() => {
        fetch('https://marathon-events-server.vercel.app/marathons')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setMarathons(data)
            })
    }, [])

    //console.log(marathons);

    return (
        <div className='container mx-aut  my-16'>



            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>All <span className='text-orange-600'>Marathon</span> Events</h2>
                <p className='lg:w-1/2 md:w-full  px-12 mx-auto text-gray-500'> Arguably one of the fastest marathon courses in the world, and inarguably the richest marathon and in the world in the and inarguably the richest marathon. </p>
            </div>



            <div className='flex justify-end'>

                <button
                    onClick={() => handleSort('createdAt')}
                    className="btn  bg-orange-600 hover:bg-orange-800 mb-6 text-white text-lg">Sort By (Created At)</button>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                }
            </div>
        </div>
    );
};

export default Marathons;