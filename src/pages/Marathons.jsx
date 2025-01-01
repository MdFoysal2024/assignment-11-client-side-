import React, { useEffect, useState } from 'react';
import MarathonCard from '../components/MarathonCard';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Marathons = () => {


    //--------pagination start from here------->

    //total number of marathon get from server side
    const { count } = useLoaderData()
    console.log(count)


    // const itemsPerPage = 6;
    // itemsPerPage  এর 6 ভেলু কে useState এ রেখে
    const [itemsPerPage, setItemsPerPage] = useState(6)

    //whose page stay now
    //default page (0)/first page 
    const [currentPage, setCurrentPage] = useState(0)

    const numberOfPages = Math.ceil(count / itemsPerPage);


    //-----for looooooping-->
    // const pages = [];
    // for (let i = 0; i < numberOfPages; i++) {
    //     pages.push(i)
    // }
    // console.log(pages)


    //for loop  টাকে ভিন্ন ভাবে এক লাইনে করা যায় --> output same

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)

    // select option for pagination-->

    // const handleItemPerPage = e => {

    //     //console.log(e.target.value);
    //     const val = parseInt(e.target.value);
    //     console.log(val);
    //     setItemsPerPage(val);

    //     //default page or reload for (0)/first page 
    //     setCurrentPage(0)

    // }









    
    
    //Prev Page btn functionality-->

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }


    //Next Page btn functionality-->

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            // pages.length-1 -->  -1  না দিয়ে একটা পেইজ অতিরিক্ত চলে যায়

            setCurrentPage(currentPage + 1)
        }
    }




    //--------pagination end here------->





    const [marathons, setMarathons] = useState([]);
    //console.log(marathons);

    const [sort, setSort] = useState('')

    const [search, setSearch] = useState('');




    useEffect(() => {
        // fetch('http://localhost:5000/all-marathons')
        //     .then(res => res.json())
        //     .then(data => {
        //         //console.log(data)
        //         setMarathons(data)
        //     })




        //----Main API Url change for pagination and create a dynamice api url--> 

        //ক্লাইন সাইট হতে page, size এর ডায়নামিক মান সার্ভারে যাবে, আর সে অনুযায়ী ডায়নামিক পেইজে ডায়নামিক ডাটা লোড হবে। আর এটাই হলো পেইজিনেশন। 

        // Used axios for advance & shortcut data loading system--->
        const fetchAllMarathons = async () => {
            const { data } = await axios.get(`http://localhost:5000/all-marathons?search=${search}&sort=${sort}&page=${currentPage}&size=${itemsPerPage}`)
            console.log(data)
            setMarathons(data)
        }

        fetchAllMarathons()

    }, [search, sort, currentPage, itemsPerPage]) //<------dependency setup----->

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

            {/* //--------pagination start from here-------> */}

            <div className='flex justify-center my-12 items-center gap-4'>
                {/* <p>Pagination</p> */}



                <button
                    className='pagination mr-6 text-orange-600'
                    onClick={handlePrevPage}><FaArrowLeftLong /></button>

                <div className='pagination'>
                    {
                        pages.map((page, indx) =>

                            <button
                                key={page}
                                // key={indx}
                                //Click করলে setCurrentPage এর ভিতরে page এর মান সেট হবে।
                                onClick={() => setCurrentPage(page)}
                                className={currentPage === page && 'selected'}


                            //page + 1 -->0 থেকে শুরু না হয়ে 1 থেকে শুরু হবে।
                            >{page}</button>
                        )
                    }
                </div>

                <button
                    className='pagination  text-orange-600'
                    onClick={handleNextPage}><FaArrowRightLong /></button>

                {/* <select value={itemsPerPage}
                    name="" id=""
                    className='border-2 border-black'
                    onChange={handleItemPerPage}
                >
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                </select> */}


            </div>




        </div>
    );
};

export default Marathons;