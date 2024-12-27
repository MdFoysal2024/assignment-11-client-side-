import React, { useEffect, useState } from 'react';
import MarathonCard from '../components/MarathonCard';

const Marathons = () => {

    const [marathons, setMarathons] = useState([]);

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
        <div className='container mx-auto my-16'>
            All Marathon ({marathons.length} )
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                }
            </div>
        </div>
    );
};

export default Marathons;