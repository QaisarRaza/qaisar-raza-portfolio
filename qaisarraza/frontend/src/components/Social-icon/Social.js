import React  from 'react'
import './Social.css'

function Social() {
  return (
    <>
      <div className='social-main'>
        <div className='social'>

          <a href='https://wa.me/923033230379' className='icon'  target="_blank">
          <i className="fab fa-whatsapp"></i>
            <p>whatsap</p>
          </a>

          <a href='https://www.facebook.com/Qaisar.Raza.5686' className='icon'  target="_blank">
          <i className="fab fa-facebook"></i>
            <p>facebook</p>
          </a>

          <a href='https://github.com/QaisarRaza' className='icon'  target="_blank">
          <i className="fab fa-github"></i>
            <p>github</p>
          </a>

          <a href='https://www.linkedin.com/in/qaisar-raza-b24510220' className='icon'  target="_blank">
          <i className="fab fa-linkedin"></i>
            <p>linkedin</p>
          </a>

        </div>
      </div>

    </>
  )
}

export default Social