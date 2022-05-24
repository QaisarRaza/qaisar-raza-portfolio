import React, { useEffect } from 'react'
import Particals from './Particals'
import './Home.css'
import Typed from 'react-typed';
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    document.title = "Qaisar Raza"
  }, [])
  return (
    <>
      <div className='partical'>
        <Particals />

        <div className='content'>
          <p>Hello, my name is</p>
          <h1>Qaisar Raza</h1>
          <h3>And I' am a </h3>
          <h2> <Typed
            strings={['Web Developer']}
            typeSpeed={60}
            backSpeed={60}
            loop={true}
          /> </h2>

          <div className='btn'>
            <Link to='/contact'><button>Hire me</button></Link>
            <Link to='/about'><button>About me</button></Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home