import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import MarathonCard from '../components/MarathonCard';
import UpcomingCard from '../components/UpcomingCard';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaPersonRunning } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { HiBadgeCheck } from "react-icons/hi";
import { Helmet } from 'react-helmet';


const Home = () => {

    const [marathons, setMarathons] = useState([]);

    useEffect(() => {


        fetch('http://localhost:5000/marathons')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMarathons(data)
            })

            
    }, [])

    //console.log(marathons);



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

    //console.log(upcomingCard);



    return (
        <div>

<Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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

            

            {/* Extra section-01 */}
            <div className='flex flex-col gap-24 my-24 bg-orange-50 p-24 lg:flex-row md:flex-col '>
                <div className='grid grid-cols-2 gap-4'>
                    <img className='w-[420px] border-8 border-white' src={'https://web.moxcreative.com/justrunnin/wp-content/uploads/sites/21/2023/03/back-view-of-a-young-male-athlete-launching-off-the-start-line.jpg'} alt="" />
                    <img className='w-[420px] h-[197px] border-8 border-white' src={'https://media.wired.com/photos/59c591dbdafeee11a7c1cb92/master/pass/BerlinMarathon-RTX1ABKY.jpg'} alt="" />
                    <img className='grid col-span-2  border-8 border-white' src={'https://live-production.wcms.abc-cdn.net.au/5a196f12c13d1215f4c6a72d46503b56?impolicy=wcms_crop_resize&cropH=1332&cropW=2368&xPos=109&yPos=130&width=862&height=485 '} alt="" />
                </div>
                <div>

                    <p className=' italic text-xl font-bold text-orange-600'>Why You Should Join Us</p>
                    <h2 className='text-5xl font-bold italic py-8 mb-4'>Run unintentionally, and feel the difference</h2>
                    <p className='text-gray-500'>Marathon never fails to deliver. Arguably one of the fastest marathon courses in the world, and inarguably the richest marathon in the world. consectetur adipiscing elit. </p>



                    <div className='grid grid-cols-2 pt-16 gap-16'>


                        <div className='flex gap-4'>

                            <HiBadgeCheck className='text-orange-600 text-6xl'></HiBadgeCheck>
                            <div>
                                <h3 className='text-3xl font-bold'>Be Strong</h3>
                                <p className='text-gray-500'>Per luctus accumsan dictumst duis orci finibus facilisi.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>

                            <HiBadgeCheck className='text-orange-600 text-6xl'></HiBadgeCheck>
                            <div>
                                <h3 className='text-3xl font-bold'>Be One of Us</h3>
                                <p className='text-gray-500'>Per luctus accumsan dictumst duis orci finibus facilisi.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>

                            <HiBadgeCheck className='text-orange-600 text-6xl'></HiBadgeCheck>
                            <div>
                                <h3 className='text-3xl font-bold'>Be Faster</h3>
                                <p className='text-gray-500'>Per luctus accumsan dictumst duis orci finibus facilisi.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>

                            <HiBadgeCheck className='text-orange-600 text-6xl'></HiBadgeCheck>
                            <div>
                                <h3 className='text-3xl font-bold'>Be Healthy</h3>
                                <p className='text-gray-500'>Per luctus accumsan dictumst duis orci finibus facilisi.</p>
                            </div>
                        </div>





                    </div>


                </div>




            </div>




            {/*Upcoming Event Section */}

            <div className='space-y-12 px-12'>

                <div className='text-center space-y-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Upcoming <span className='text-orange-600'>Marathon</span> Events</h2>
                    <p className='lg:w-1/2 md:w-full  px-12 mx-auto text-gray-500'> Arguably one of the fastest marathon courses in the world, and inarguably the richest marathon and in the world in the and inarguably the richest marathon. </p>
                </div>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        upcomingCard.map(card => <UpcomingCard key={card.id} card={card}></UpcomingCard>)
                    }
                </div>
            </div>








            {/* Extra section-02 */}

            <div>
                <section className="bg-gray-100 my-24 border-2 border-gray-200  text-gray-800">
                    <div className="container flex flex-col justify-center p-12 my-16 mx-auto sm:py-12  lg:flex-row gap-16 lg:justify-between">
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="https://www.tata.com/content/dam/tata/images/newsroom/community/desktop/marathon-lead-image-desktop-1920x1080.jpg" alt="" className="" />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Additional Information on The Kauai  <span className='text-orange-600'> Marathon </span>
                            </h1>

                            <div className='flex font-bold pt-8 justify-between'>
                                <p className='flex items-center gap-2'><FaLocationDot />Malibu, California <span className='text-gray-500'></span></p>
                                <p className='flex items-center gap-2'><FaPersonRunning />10km, 15km <span className='text-gray-500'></span></p>
                                <p className='flex items-center gap-2'><FaCalendarAlt /> <span className='text-white font-semibold bg-orange-600 px-4 rounded-full '>Coming Soon</span></p>
                            </div>
                            <p className="mt-6 mb-8 text-gray-500 text-lg sm:mb-12">The Kauai Marathon and Half Marathon is one of the most beautiful destination races in the world today. Run on August 31, 2025, this is a great way to combine a unique experience and a get-away that only Kauai can offer. You will be treated to beautiful beaches, an inspiring course, and fellowship with participants from around the world. Register today!
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link to={'/add_marathons'} rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-orange-600 text-white">Add Marathon</Link>
                                <Link to={'/marathons'} rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-orange-600 text-orange-600">Registration</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;