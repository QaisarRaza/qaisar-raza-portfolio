import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
    const [active, setActive] = useState(1)
    const toggle = (index) => {
        setActive(index);
    }
    return (
        <>
            <div className='nav-main'>
                <div className='navbar'>
                    <Link to="/" className={active === 1 ? "prev active" : "prev"} onClick={() => toggle(1)}>
                        <i className="far fa-home-alt home"></i>
                        <p>home</p>
                    </Link>

                    <Link to="/about" className={active === 2 ? "prev active" : "prev"} onClick={() => toggle(2)}>
                        <i className="fas fa-user home"></i>
                        <p>about</p>
                    </Link>

                    <Link to="/skills" className={active === 3 ? "prev active" : "prev"} onClick={() => toggle(3)}>
                        <i className="fas fa-user-cog home"></i>
                        <p>skills</p>
                    </Link>

                    <Link to="/services" className={active === 4 ? "prev active" : "prev"} onClick={() => toggle(4)}>
                        <i className="fal fa-laptop-code home"></i>
                        <p>services</p>
                    </Link>


                    <Link to="/team" className={active === 5 ? "prev active" : "prev"} onClick={() => toggle(5)}>
                        <i className="far fa-users home"></i>
                        <p>team</p>
                    </Link>

                    <Link to="/portfolio" className={active === 6 ? "prev active" : "prev"} onClick={() => toggle(6)}>
                        <i className="fad fa-browser home"></i>
                        <p>portfolio</p>
                    </Link>

                    <Link to="/contact" className={active === 7 ? "prev active" : "prev"} onClick={() => toggle(7)}>
                        <i className="fad fa-address-card home"></i>
                        <p>contact us</p>
                    </Link>


                </div>
            </div>

        </>
    )
}

export default Navbar