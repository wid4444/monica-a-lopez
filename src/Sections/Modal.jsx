import { useState, useRef, useEffect } from "react";
import "./Modal.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import mural1 from "../assets/murals/1.jpg";
import mural2 from "../assets/murals/2.jpg";
import mural3 from "../assets/murals/3.jpg";
import mural4 from "../assets/murals/4.jpg";
import mural5 from "../assets/murals/5.jpg";
import mural6 from "../assets/murals/6.jpg";
import mural7 from "../assets/murals/7.jpg";
import mural8 from "../assets/murals/8.jpg";
import mural9 from "../assets/murals/9.jpg";
import mural10 from "../assets/murals/10.jpg";
import mural11 from "../assets/murals/11.jpg";
import mural12 from "../assets/murals/12.jpg";
import mural13 from "../assets/murals/13.jpg";
import mural14 from "../assets/murals/14.jpg";
import mural15 from "../assets/murals/15.jpg";
import mural16 from "../assets/murals/16.jpg";
import mural17 from "../assets/murals/17.jpg";
import mural18 from "../assets/murals/18.jpg";
import mural19 from "../assets/murals/19.jpg";
import mural20 from "../assets/murals/20.jpeg";
import mural21 from "../assets/murals/21.jpeg";
import mural22 from "../assets/murals/22.jpeg";
import mural23 from "../assets/murals/23.jpg";
import mural24 from "../assets/murals/24.jpg";
import mural25 from "../assets/murals/25.jpg";
import mural26 from "../assets/murals/26.jpg";
import mural27 from "../assets/murals/27.jpg";
import mural28 from "../assets/murals/28.jpg";
import mural29 from "../assets/murals/29.jpg";

import acrilycs1 from "../assets/acrylics/1.jpg";
import acrilycs2 from "../assets/acrylics/2.jpg";
import acrilycs3 from "../assets/acrylics/3.jpg";
import acrilycs4 from "../assets/acrylics/4.jpg";
import acrilycs5 from "../assets/acrylics/5.jpg";
import acrilycs6 from "../assets/acrylics/6.jpg";
import acrilycs7 from "../assets/acrylics/7.jpg";
import acrilycs8 from "../assets/acrylics/8.jpg";
import acrilycs9 from "../assets/acrylics/9.jpg";
import acrilycs10 from "../assets/acrylics/10.jpg";
import acrilycs11 from "../assets/acrylics/11.jpg";
import acrilycs12 from "../assets/acrylics/12.jpg";
import acrilycs13 from "../assets/acrylics/13.jpg";
import acrilycs14 from "../assets/acrylics/14.jpg";
import acrilycs15 from "../assets/acrylics/15.jpg";
import acrilycs16 from "../assets/acrylics/16.jpg";

import teaching1 from "../assets/teaching/1.jpg";
import teaching2 from "../assets/teaching/2.jpg";
import teaching3 from "../assets/teaching/3.jpg";
import teaching4 from "../assets/teaching/4.jpg";

import cultural1 from "../assets/cultural/1.jpg";
import cultural2 from "../assets/cultural/2.jpg";

import aluminio1 from "../assets/aluminio/1.jpg";
import aluminio2 from "../assets/aluminio/2.jpg";
import aluminio3 from "../assets/aluminio/3.jpg";
import aluminio4 from "../assets/aluminio/4.jpg";
import aluminio5 from "../assets/aluminio/5.jpg";
import aluminio6 from "../assets/aluminio/6.jpg";
import aluminio7 from "../assets/aluminio/7.jpg";
import aluminio8 from "../assets/aluminio/8.jpg";
import aluminio9 from "../assets/aluminio/9.jpg";
import aluminio10 from "../assets/aluminio/10.jpg";
import aluminio11 from "../assets/aluminio/11.jpg";
import aluminio12 from "../assets/aluminio/12.jpg";
import aluminio13 from "../assets/aluminio/13.jpg";
import aluminio14 from "../assets/aluminio/14.jpg";
import aluminio15 from "../assets/aluminio/15.jpg";
import aluminio16 from "../assets/aluminio/16.jpg";
import aluminio17 from "../assets/aluminio/17.jpg";
import aluminio18 from "../assets/aluminio/18.jpg";

import prints1 from "../assets/prints/1.jpg";
import prints2 from "../assets/prints/2.jpg";
import prints3 from "../assets/prints/3.jpg";
import prints4 from "../assets/prints/4.jpg";
import prints5 from "../assets/prints/5.jpg";

import wood1 from "../assets/wood/1.jpg";
import wood2 from "../assets/wood/2.jpg";
import wood3 from "../assets/wood/3.jpg";
import wood4 from "../assets/wood/4.jpg";
import wood5 from "../assets/wood/5.jpg";
import wood6 from "../assets/wood/6.jpg";
import wood7 from "../assets/wood/7.jpg";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState("murals");
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null); // ⬅️ Get reference to Swiper instance
  const thumbnailRefs = useRef([]);

  const handleThumbClick = (index) => {
    swiperRef.current?.slideTo(index);
    thumbnailRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);               // depend on isOpen

  const closeModal = () => {
    setIsOpen(false);
    onClose();   // <-- there's no onClose prop; this throws
  };


  const galleryImages = {
    murals: [
      mural1,
      mural2,
      mural3,
      mural4,
      mural5,
      mural6,
      mural7,
      mural8,
      mural9,
      mural10,
      mural11,
      mural12,
      mural13,
      mural14,
      mural15,
      mural16,
      mural17,
      mural18,
      mural19,
      mural20,
      mural21,
      mural22,
      mural23,
      mural24,
      mural25,
      mural26,
      mural27,
      mural28,
      mural29,
    ],
    "acrylics and mix media": [
      acrilycs1,
      acrilycs2,
      acrilycs3,
      acrilycs4,
      acrilycs5,
      acrilycs6,
      acrilycs7,
      acrilycs8,
      acrilycs9,
      acrilycs10,
      acrilycs11,
      acrilycs12,
      acrilycs13,
      acrilycs14,
      acrilycs15,
      acrilycs16,
    ],
    "art instructor": [teaching1, teaching2, teaching3, teaching4],
    "cultural makeup": [cultural1, cultural2],
    "embossing aluminum": [
      aluminio1,
      aluminio2,
      aluminio3,
      aluminio4,
      aluminio5,
      aluminio6,
      aluminio7,
      aluminio8,
      aluminio9,
      aluminio10,
      aluminio11,
      aluminio12,
      aluminio13,
      aluminio14,
      aluminio15,
      aluminio16,
      aluminio17,
      aluminio18,
    ],
    prints: [prints1, prints2, prints3, prints4, prints5],
    wood: [wood1, wood2, wood3, wood4, wood5, wood6, wood7],
    // Add more galleries as needed
  };

  return (
    <div className="modal-container">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Gallery
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              
            </button>
            <div className="tabs-container">
              <div className="tabs">
                {[
                  "murals",
                  "acrylics and mix media",
                  "art instructor",
                  "cultural makeup",
                  "embossing aluminum",
                  "prints",
                  "wood",
                ].map((section) => (
                  <button
                    key={section}
                    className={`tab-btn ${
                      activeGallery === section ? "active" : ""
                    }`}
                    onClick={() => setActiveGallery(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // ⬅️ Assign swiper instance to ref
              onSlideChange={(swiper) => {
                setCurrentSlide(swiper.activeIndex);
                thumbnailRefs.current[swiper.activeIndex]?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
              }}
              style={{ width: "100%", height: "auto" }}
            >
              {galleryImages[activeGallery].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="main-image-container">
                    <img
                      src={src}
                      alt={`${activeGallery} ${index}`}
                      className="main-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail gallery */}
            <div className="gallery-wrapper">
              <div className="gallery-container">
                {galleryImages[activeGallery].map((src, index) => (
                  <img
                    key={index}
                    ref={(el) => (thumbnailRefs.current[index] = el)}
                    src={src}
                    alt={`${activeGallery} ${index}`}
                    className={`gallery-img ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => handleThumbClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
