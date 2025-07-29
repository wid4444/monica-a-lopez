import "./Contact.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaThreads,
  FaTiktok,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import img1 from "../assets/contact-img.jpeg";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Connect With Me</h1>

      <div className="content-container">
        <div className="contact-img-container">
          <img src={img1} alt="" className="contact-img" />
        </div>
        <div className="contact-sm-icons">
          <a
            href="mailto:monyu16@gmail.com"
            className="contact-social-media-icon mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMail className="mail" size={25} />
          </a>
          <a
            href="https://www.facebook.com/monyuuu"
            className="contact-social-media-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="facebook" size={25} />
          </a>
          {/* <a href="#icon" className='contact-social-media-icon' style={{ color: '#007cc4' }} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className='linkedin' size={25}/>
        </a> */}
          <a
            href="https://www.instagram.com/monyuuu/"
            className="contact-social-media-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="instagram" size={25} />
          </a>
          {/* <a href="#icon" className='contact-social-media-icon' style={{ color: '#007cc4' }} target="_blank" rel="noopener noreferrer">
          <FaYoutube className='youtube' size={25}/>
        </a> */}
          <a
            href="https://www.threads.com/@monyuuu"
            className="contact-social-media-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaThreads className="threads" size={25} />
          </a>
          <a
            href="https://www.tiktok.com/@monyuuu16"
            className="contact-social-media-icon "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="tiktok" size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
