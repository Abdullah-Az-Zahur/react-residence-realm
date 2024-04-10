import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                'background-image':
                                    'url(https://i.ibb.co/DLCdTCj/cozy-family-home.jpg)',
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <div className='h-'>
                            <div className="title" data-swiper-parallax="-300">
                                Cozy Family Home
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Single-family Home
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p className=''>
                                    Beautiful single-family home perfect for a family. Spacious living area, modern kitchen, and backyard garden.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                'background-image':
                                    'url(https://i.ibb.co/12yb6fM/uxurious-Townhouse.jpg)',
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <div className='h-'>
                            <div className="title" data-swiper-parallax="-300">
                                Luxurious Townhouse
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Townhouse
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p className=''>
                                    Elegant townhouse with contemporary design. Features a private patio and access to community amenities.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                'background-image':
                                    'url(https://i.ibb.co/pJR0dJ8/Modern-Apartment.jpg)',
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <div className='h-'>
                            <div className="title" data-swiper-parallax="-300">
                                Modern Apartment
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Apartment
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p className=''>
                                    Stylish apartment in a prime location. Offers a swimming pool, fitness center, and gated community.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                'background-image':
                                    'url(https://i.ibb.co/71ttwj8/Student-Housing.jpg)',
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <div className='h-'>
                            <div className="title" data-swiper-parallax="-300">
                                Student Housing
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Student Housing
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p className=''>
                                    Spacious student housing near the university campus. Each room equipped with essential amenities.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                'background-image':
                                    'url(https://i.ibb.co/rQ5xq5z/Senior-Living-Apartment.jpg)',
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <div className='h-'>
                            <div className="title" data-swiper-parallax="-300">
                                Senior Living Apartment
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Senior Living Community
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p className=''>
                                    Comfortable studio apartment in a senior living community. Offers meal service, housekeeping, and medical assistance.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                'background-image':
                                    'url(https://i.ibb.co/LhDJPkK/Seaside-Vacation-Rental.jpg)',
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <div className='h-'>
                            <div className="title" data-swiper-parallax="-300">
                                Seaside Vacation Rental
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Vacation Rental
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p className=''>
                                    Charming vacation rental with beachfront access. Enjoy stunning views and modern amenities.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Banner;