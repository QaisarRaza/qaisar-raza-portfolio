import React, { useEffect } from 'react'
import './About.css'
import cv from '../About/qaisarraza.pdf'
import portfolioData from '../Portfolio/portfolioPage/portfolioPage1Api'
import { Link } from 'react-router-dom'

function About() {
    useEffect(() => {
        document.title = "About"
    }, [])
    return (
        <>

            <div className='about' >
                <h1 > About me </h1>

                { /* about picture */}
                <div className='aboutrap' >
                    <div className='picimg' >
                        <div className='piccolor' > </div>


                    </div> { /* about content  */}
                    <div className='aboutcontent' >
                        <div className='box' >
                            <div className='box1' >
                                <i className="fas fa-user home" > </i>
                                <h4> Experience </h4>
                                <h5> 1 year </h5>
                            </div>
                            <div className='box1' >
                                <i className="fas fa-user home" > </i>
                                <h4> project </h4>
                                <h5> total {portfolioData.length}+ </h5>
                            </div>
                        </div>

                        <p> Hi, my name is Qaisar Raza and Graduated in Computer Science and a professional front - end developer.I have good expertise in HTML5, CSS3,
                            JavaScript, jQuery, Bootstrap and React.js.I can provide you high level front - end skills with good development practices.Your 100 % satisfaction is my first priority.Feel free to contact me. </p>

                        <div className='aboutbtn' >
                            <Link to="/contact" > <button button > Let 's talk</button></Link>
                            <a href={cv} target="_blank" > <button> Download CV </button></a >
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default About