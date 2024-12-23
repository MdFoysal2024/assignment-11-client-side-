import React from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bg_img1 from '../assets/images/carousel1.jpg'
import bg_img2 from '../assets/images/carousel2.jpg'
import bg_img3 from '../assets/images/carousel3.jpg'
import Slide from './Slide';
import { Swiper, SwiperSlide } from 'swiper/react';



const Carousel = () => {
    return (
        <div className='container px-6  py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bg_img1}
                        text='Get Your Web Development Projects Done in minutes'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bg_img2}
                        text='Get Your Graphics Design Projects Done in minutes'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bg_img3}
                        text='Start Your Digital Marketing Campaigns up n running'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;