import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import MarathonCard from '../components/MarathonCard';

const Home = () => {

const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/marathons')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMarathons(data)
            })
    }, [])

    console.log(marathons);


    return (
        <div>
           <Carousel></Carousel>

           {/* Marathon Section */}

           <div className='grid my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    marathons.slice(0,6).map(marathon => <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                }
            </div>

        </div>
    );
};

export default Home;