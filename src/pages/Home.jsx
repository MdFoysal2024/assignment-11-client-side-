import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import MarathonCard from '../components/MarathonCard';
import UpcomingCard from '../components/UpcomingCard';

const Home = () => {

    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch('https://marathon-events-server.vercel.app/marathons')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMarathons(data)
            })
    }, [])

    console.log(marathons);



    // Upcoming Card Section
    const [upcomingCard, setUpcomingCard] = useState([]);
    useEffect(() => {
        fetch('upcomingData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setUpcomingCard(data)
            })
    }, [])

    console.log(upcomingCard);



    return (
        <div>
            <Carousel></Carousel>

            {/* Running Marathon Section */}
            <div className='my-24 space-y-12'>

                <div className='text-center space-y-4'>
                    <h2 className='text-5xl font-bold'>Running  <span className='text-orange-600'>Marathon</span> Events</h2>
                    <p className='w-1/2 mx-auto text-gray-500'>The Marathon never fails to deliver. Arguably one of the fastest marathon courses in the world, and inarguably the richest marathon in the world. </p>
                </div>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        marathons.slice(0, 6).map(marathon => <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                    }
                </div>

            </div>




            {/*Upcoming Event Section */}

            <div my-24 space-y-12>

                <div className='text-center space-y-4'>
                    <h2 className='text-5xl font-bold'>Upcoming <span className='text-orange-600'>Marathon</span> Events</h2>
                    <p className='w-1/2 mx-auto text-gray-500'> Arguably one of the fastest marathon courses in the world, and inarguably the richest marathon and in the world in the and inarguably the richest marathon. </p>
                </div>
                <div className='grid my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        upcomingCard.map(card => <UpcomingCard key={card.id} card={card}></UpcomingCard>)
                    }
                </div>
            </div>











            <div>
                <section className="bg-gray-100 text-gray-800">
                    <div className="container flex flex-col justify-center p-12 my-24 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-16 lg:justify-between">
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="https://www.tata.com/content/dam/tata/images/newsroom/community/desktop/marathon-lead-image-desktop-1920x1080.jpg" alt="" className="" />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Additional Information on The Kauai  <span className='text-orange-600'> Marathon </span>
                            </h1>
                            <p className="mt-6 mb-8 text-gray-500 text-lg sm:mb-12">The Kauai Marathon and Half Marathon is one of the most beautiful destination races in the world today. Run on August 31, 2025, this is a great way to combine a unique experience and a get-away that only Kauai can offer. You will be treated to beautiful beaches, an inspiring course, and fellowship with participants from around the world. Register today!
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-orange-600 text-white">Suspendisse</a>
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-400">Malesuada</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;