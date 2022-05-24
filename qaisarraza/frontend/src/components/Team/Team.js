import React, { useEffect } from 'react';
import './Team.css';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import umar from "../../assets/profile.png";
import qaisar from "../../assets/qaisar.png";
import usman from "../../assets/usman.png";

function Team() {
    useEffect(() => {
        document.title = "Team Members"
    }, [])
    return (
        <div id='team'>
            <h1>Our Team</h1>
            <Swiper className='cardsContainer'
                modules={[Pagination, Autoplay, EffectCoverflow]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={40}
                slidesPerView={"auto"}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >

                <SwiperSlide className='cards'>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                    <div className='line-3'></div>
                    <div className='line-4'></div>
                    <img src={qaisar} alt="" />
                    <h2>Qaisar Raza</h2>
                    <p>Full Stack Developer</p>
                    <div className='cbtn'>
                    <Link to="/contact" > <button button >Contact Us</button></Link>
                    <Link to="/about"> <button> About Me </button></Link >
                    </div>
                    <div className="animatedHover">
                        <div className="socialIcons">
                            <a href='https://www.linkedin.com/in/qaisar-raza-b24510220' target="_blank"><i className="fab fa-linkedin icons"></i></a>
                            <a href='https://github.com/QaisarRaza' target="_blank"><i className="fab fa-github icons"></i></a>
                            <a href='https://www.facebook.com/Qaisar.Raza.5686' target="_blank"><i className="fab fa-facebook icons"></i></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cards'>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                    <div className='line-3'></div>
                    <div className='line-4'></div>
                    <img src={umar} alt="" />
                    <h2>Umar Maqsood</h2>
                    <p>Mern Stack Developer</p>
                    <div className='cbtn'>
                    <a href="https://umarmaqsood.netlify.app/Contact" > <button button >Contact Us</button></a>
                    <a href="https://umarmaqsood.netlify.app/About"> <button> About Me </button></a>
                    </div>
                    <div className="animatedHover">
                        <div className="socialIcons">
                            <a href='https://www.linkedin.com/in/umar-maqsood-2b426b162' target="_blank"><i className="fab fa-linkedin icons"></i></a>
                            <a href='https://github.com/UmarMaqsood145' target="_blank"><i className="fab fa-github icons"></i></a>
                            <a href='https://www.facebook.com/umar.maqsood.315428' target="_blank"><i className="fab fa-facebook icons"></i></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='cards'>
                    <div className='line-1'></div>
                    <div className='line-2'></div>
                    <div className='line-3'></div>
                    <div className='line-4'></div>
                    <img src={usman} alt="" />
                    <h2>Muhammad Usman</h2>
                    <p>Frontend Developer<br />UI/UX Designer</p>
                    <div className='cbtn'>
                    <Link to="/contact" > <button button >Contact Us</button></Link>
                    <Link to="/about"> <button> About Me </button></Link >
                    </div>
                    <div className="animatedHover">
                        <div className="socialIcons">
                            <a href='https://www.linkedin.com/in/muhammad-usman-a69b01219' target="_blank"><i className="fab fa-linkedin icons"></i></a>
                            <a href='https://github.com/usmankh07' target="_blank"><i className="fab fa-github icons"></i></a>
                            <a href='https://www.facebook.com/usman03777' target="_blank"><i className="fab fa-facebook icons"></i></a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Team