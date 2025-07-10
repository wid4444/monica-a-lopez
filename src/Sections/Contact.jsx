import './Contact.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube  } from "react-icons/fa6";


const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      this is the Contact section


      <div className="social-media">
        <a href="#icon" className='social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-facebook"></i> */}
          <FaFacebookF className='facebook' size={25}/>
        </a>
        <a href="#icon" className='social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-linkedin"></i> */}
          <FaLinkedinIn className='linkedin' size={25}/>
        </a>
        <a href="#icon" className='social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-instagram"></i> */}
          <FaInstagram className='instagram' size={25}/>
        </a>
        <a href="#icon" className='social-media-icon' style={{ color: '#007cc4' }}>
          {/* <i className="fab fa-youtube"></i> */}
          <FaYoutube className='youtube' size={25}/>
        </a>
      </div>

    </div>
  )
}

export default Contact

