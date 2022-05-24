import React, { useEffect } from 'react'
import './Services.css'
import services  from '../Services/ServicesApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

function Services() {
    useEffect(() => {
        document.title = "Services"
    }, [])
    return (
        <>

            <div className='services'>
                <h1>My Services</h1>

                <Swiper className='servicescard'
                    modules={[Pagination, Autoplay, EffectCoverflow]}
                    effect={"coverflow"}
                    centeredSlides={true}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    {
                        services.map((ser1) => {
                       return     <SwiperSlide className='scard'>
                                <img src={ser1.img} alt="" />
                                <h2>{ser1.title}</h2>
                                <h3>{ser1. description}</h3>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
            </div>

        </>
    )
}

export default Services