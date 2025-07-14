import './Contact.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube  } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import img1 from '../assets/contact-img.jpeg';


const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <h1 className="contact-title">
      Connect With Me
      </h1>
      

<div className="content-container">
  <div className="contact-img-container">
    <img src={img1} alt="" className='contact-img' />
  </div>
      <div className="contact-sm-icons">
      <a href="#icon" className='contact-social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-facebook"></i> */}
          <IoMail className='mail' size={25}/>
          </a>
        <a href="#icon" className='contact-social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-facebook"></i> */}
          <FaFacebookF className='facebook' size={25}/>
        </a>
        <a href="#icon" className='contact-social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-linkedin"></i> */}
          <FaLinkedinIn className='linkedin' size={25}/>
        </a>
        <a href="#icon" className='contact-social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-instagram"></i> */}
          <FaInstagram className='instagram' size={25}/>
        </a>
        <a href="#icon" className='contact-social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-youtube"></i> */}
          <FaYoutube className='youtube' size={25}/>
        </a>
      </div>
      </div>
    </div>
  )
}

export default Contact

