import React,{useEffect} from 'react'
import './Skill.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay,EffectCoverflow } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';


function Skill() {
    useEffect(() => {
    document.title="skills"
    }, [])
    
    return (
        <>

            <div className='skill'>
                <h1>My experience</h1>

                <Swiper className='sweap'
                    modules={[Pagination,Autoplay,EffectCoverflow]}
                    effect={"coverflow"}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                    pagination={{clickable:true}} 
                        autoplay={{
                            delay:2500,
                            disableOnInteraction:false
                        }}
                        >

                         {/* frontend development swiper page 1 */}
                    <SwiperSlide className='sweapbox1'>
                        <p>Frontend Development</p>
                        <div class="avg">
                            <div class="html">
                                <div class="prsn">
                                    <h4>Html</h4>
                                    <h4>80%</h4>
                                </div>
                                <div class="range">
                                    <div class="prsnrange"></div>
                                </div>
                            </div>

                            <div class="html">
                                <div class="prsn1">
                                    <h4>Css</h4>
                                    <h4>75%</h4>
                                </div>
                                <div class="range1">
                                    <div class="prsnrange1"></div>
                                </div>
                            </div>

                            <div class="html">
                                <div class="prsn2">
                                    <h4>JavaScript</h4>
                                    <h4>60%</h4>
                                </div>
                                <div class="range2">
                                    <div class="prsnrange2"></div>
                                </div>
                            </div>

                            <div class="html">
                                <div class="prsn3">
                                    <h4>jQuery</h4>
                                    <h4>60%</h4>
                                </div>
                                <div class="range3">
                                    <div class="prsnrange3"></div>
                                </div>
                            </div>

                            <div class="html">
                                <div class="prsn4">
                                    <h4>React.js</h4>
                                    <h4>70%</h4>
                                </div>
                                <div class="range4">
                                    <div class="prsnrange4"></div>
                                </div>
                            </div>
                            <div class="html">
                                <div class="prsn4">
                                    <h4>Bootstrap</h4>
                                    <h4>80%</h4>
                                </div>
                                <div class="range4">
                                    <div class="prsnrange4"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                       {/* backend development swiper page 2 */}
                    <SwiperSlide className='sweapbox1'>
                        <p>Backend Development</p>
                        <div class="avg">
                            <div class="html">
                                <div class="prsn">
                                    <h4>Node.js</h4>
                                    <h4>80%</h4>
                                </div>
                                <div class="range">
                                    <div class="prsnrange"></div>
                                </div>
                            </div>

                            <div class="html">
                                <div class="prsn1">
                                    <h4>Express</h4>
                                    <h4>75%</h4>
                                </div>
                                <div class="range1">
                                    <div class="prsnrange1"></div>
                                </div>
                            </div>

                            <div class="html">
                                <div class="prsn4">
                                    <h4>MongoDB</h4>
                                    <h4>80%</h4>
                                </div>
                                <div class="range4">
                                    <div class="prsnrange4"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Education */}
                    <SwiperSlide className='sweapbox1'>
                        <p>Education</p>
                      <h2>BS Computer Science 2017-2021</h2>
                      <h3>Hi, My Name Qaisar Raza and Graduated in Computer Science and a
                            professional front-end developer. I have good expertise in HTML5, CSS3,
                            JavaScript, jQuery, Bootstrap and React.js. I can provide you high level
                            front-end skills with good development practices. Your 100% satisfaction is
                            my first priority. Feel free to contact me.</h3>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default Skill