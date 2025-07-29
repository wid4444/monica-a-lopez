import { useEffect, useState } from "react";
import "./Home.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaThreads,
  FaTiktok,
} from "react-icons/fa6";

import logo from "../assets/logo.png";
import monica1 from "../assets/10.jpg";
import monica3 from "../assets/1.jpeg";
import monica4 from "../assets/2.jpg";
import monica5 from "../assets/7.jpg";
import monica6 from "../assets/4.jpg";
import monica7 from "../assets/5.jpeg";
import monica8 from "../assets/6.jpg";
import monica9 from "../assets/9.jpg";
import monica10 from "../assets/8.jpg";
import monica2 from "../assets/13.jpg";
import monica11 from "../assets/11.jpg";

import monica6_1 from "../assets/6.1.jpg";
import monica2_1 from "../assets/2.1.jpg";
import monica4_1 from "../assets/4.1.jpg";
import monica7_1 from "../assets/7.1.jpg";
import monica8_1 from "../assets/8.1.jpg";
import monica13_1 from "../assets/13.1.jpg";

// Desktop-only image set
const images = [
  { src: monica2, title: "Live Mural for Equity Event" },
  { src: monica4, title: "Día de Muertos, Artistic Makeup" },
  { src: monica5, title: "Mural at Harrison St, Spray Paint" },
  { src: monica6, title: "Immigrant Empowerment Talk for Teens" },
  { src: monica8, title: "Promotional Photos by Art Dream Studios" },
  { src: monica10, title: "Artistic Makeup & Accessories" },
];

// Mobile-only image set
const mobileImages = [
  { src: monica13_1, title: "Live Mural for Equity Event" },
  { src: monica2_1, title: "Día de Muertos, Artistic Makeup" },
  { src: monica7_1, title: "Mural at Harrison St, Spray Paint" },
  { src: monica4_1, title: "Immigrant Empowerment Talk for Teens" },
  { src: monica6_1, title: "Promotional Photos by Art Dream Studios" },
  { src: monica8_1, title: "Artistic Makeup & Accessories" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const imageSet = isMobile ? mobileImages : images;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint if needed
    };

    handleResize(); // call once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="home-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="social-media">
          <a
            href="https://www.facebook.com/monyuuu"
            className="social-media-icon facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} />
          </a>
          {/* <a href="#icon" className="social-media-icon linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={20} />
          </a> */}
          <a
            href="https://www.instagram.com/monyuuu/"
            className="social-media-icon instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          {/* <a href="#icon" className="social-media-icon youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} />
          </a> */}
          <a
            href="https://www.threads.com/@monyuuu"
            className="social-media-icon threads threads"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaThreads size={25} />
          </a>
          <a
            href="https://www.tiktok.com/@monyuuu16"
            className="social-media-icon tiktok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={25} />
          </a>
        </div>
      </div>

      {imageSet.map((img, index) => (
        <div
          key={index}
          className={`bg-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="overlay">
            <h1 className="name">Monica Lopez</h1>
            <p className="caption">{img.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
