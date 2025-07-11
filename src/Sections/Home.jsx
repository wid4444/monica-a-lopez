import { useEffect, useState } from "react";
import "./Home.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import logo from "../assets/logo.png"; // Assuming you have a logo image
import monica1 from "../assets/monica.jpg";
import monica2 from "../assets/13.jpg";
import monica3 from "../assets/1.jpeg";
import monica4 from "../assets/2.jpg";
import monica5 from "../assets/3.jpg";

const images = [
  { src: monica1, title: "Mural Work" },
  { src: monica2, title: "Acrylic Portrait" },
  { src: monica3, title: "Teaching Session" },
  { src: monica4, title: "Cultural Makeup" },
  { src: monica5, title: "Community Art" },
  // Add more if needed
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <a href="#icon" className="social-media-icon facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="#icon" className="social-media-icon linkedin">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#icon" className="social-media-icon instagram">
            <FaInstagram size={20} />
          </a>
          <a href="#icon" className="social-media-icon youtube">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {images.map((img, index) => (
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
