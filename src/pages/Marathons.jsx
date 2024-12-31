import React, { useEffect, useState } from 'react';
import MarathonCard from '../components/MarathonCard';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Marathons = () => {

    const [marathons, setMarathons] = useState([]);
    //console.log(marathons);

    const [sort, setSort] = useState('')

    const [search, setSearch] = useState('');

    // const handleSort = sortBy => {
    //     if (sortBy == 'createdAt') {
    //         const sorted = [...sortData].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    //         setSortData(sorted)
    //         console.log(sorted, 12)
    //     }

    // }


    useEffect(() => {
        // fetch('https://marathon-events-server.vercel.app/all-marathons')
        //     .then(res => res.json())
        //     .then(data => {
        //         //console.log(data)
        //         setMarathons(data)
        //     })



        // Used axios for advance & shortcut data loading system--->
        const fetchAllMarathons = async () => {
            const { data } = await axios.get(`http://localhost:5000/all-marathons?search=${search}&sort=${sort}`)

            setMarathons(data)
        }

        fetchAllMarathons()

    }, [search, sort])

    //console.log(marathons);





    return (
        <div className='container mx-aut  my-16'>
<Helmet>
                <meta charSet="utf-8" />
                <title>Marathon Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>All <span className='text-orange-600'>Marathon</span> Events</h2>
                <p className='lg:w-1/2 md:w-full  px-12 mx-auto text-gray-500'> Arguably one of the fastest marathon courses in the world, and inarguably the richest marathon and in the world in the and inarguably the richest marathon. </p>
            </div>
            <div className='flex justify-center my-8'>
                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2   lg:w-[640px] text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        onChange={e => setSearch(e.target.value)}
                        //onBlur={e => setSearch(e.target.value)}
                        placeholder='Search...'
                        aria-label='Enter Job Title'
                    />

                    <button className='px-4 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-800 focus:bg-gray-600 focus:outline-none'>
                        <FaSearch />
                    </button>
                </div>
            </div>




            {/* <div className='flex justify-end'>

                <button
                    // onClick={() => handleSort('createdAt')}
                    className="btn  bg-orange-600 hover:bg-orange-800 mb-6 text-white text-lg">Sort By (Created At)</button>
            </div> */}


            <div className='flex justify-end '>
                <select
                    name='category'
                    id='category'
                    onChange={e => setSort(e.target.value)}
                    className='border p-4 mb-8 rounded-md font-bold bg-orange-600 text-white '
                >
                    <option value=''>Sort By CreatedAt</option>
                    <option value='dsc'>Descending Order</option>
                    <option value='asc'>Ascending Order</option>
                </select>
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