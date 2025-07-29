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
import mural17_1 from "../assets/murals/17.1.jpeg";
import mural17_2 from "../assets/murals/17.2.jpeg";
import mural17 from "../assets/murals/17.jpg";
import mural18 from "../assets/murals/18.jpeg";
import mural19 from "../assets/murals/19.jpeg";
import mural20 from "../assets/murals/20.jpeg";
import mural21 from "../assets/murals/21.jpg";
import mural22 from "../assets/murals/22.jpg";
import mural23 from "../assets/murals/23.jpg";
import mural24 from "../assets/murals/24.jpeg";
import mural25 from "../assets/murals/25.jpg";
import mural26 from "../assets/murals/26.jpg";
import mural27 from "../assets/murals/27.jpg";
import mural28 from "../assets/murals/28.jpg";
import mural29 from "../assets/murals/29.jpg";
import mural30 from "../assets/murals/30.jpeg";
import mural31 from "../assets/murals/31.jpeg";
import mural32 from "../assets/murals/32.jpeg";
import mural33_1 from "../assets/murals/33.jpeg";
import mural33 from "../assets/murals/33.jpg";
import mural34 from "../assets/murals/34.jpeg";
import mural35 from "../assets/murals/35.jpeg";
import mural36 from "../assets/murals/36.jpg";
import mural37 from "../assets/murals/37.jpg";
// import mural38 from "../assets/murals/38.jpg";
// import mural39 from "../assets/murals/39.jpg";

import co_mural1 from "../assets/co-murals/1.jpg";
import co_mural2 from "../assets/co-murals/2.jpg";
import co_mural3 from "../assets/co-murals/3.jpg";
import co_mural4 from "../assets/co-murals/4.jpg";
import co_mural5 from "../assets/co-murals/5.jpg";
import co_mural6 from "../assets/co-murals/6.jpg";
import co_mural7 from "../assets/co-murals/7.jpg";
import co_mural8 from "../assets/co-murals/8.jpg";
import co_mural9 from "../assets/co-murals/9.jpg";
import co_mural10 from "../assets/co-murals/10.jpg";
import co_mural11 from "../assets/co-murals/11.jpg";
import co_mural12 from "../assets/co-murals/12.jpg";
import co_mural13 from "../assets/co-murals/13.jpg";
import co_mural14 from "../assets/co-murals/14.jpg";
import co_mural15 from "../assets/co-murals/15.jpg";
import co_mural16 from "../assets/co-murals/16.jpg";
import co_mural17 from "../assets/co-murals/17.jpg";
import co_mural18 from "../assets/co-murals/18.jpg";
import co_mural19 from "../assets/co-murals/19.jpg";
import co_mural20 from "../assets/co-murals/20.jpg";
import co_mural21 from "../assets/co-murals/21.jpg";
import co_mural22 from "../assets/co-murals/22.jpg";
import co_mural23 from "../assets/co-murals/23.jpg";
import co_mural24 from "../assets/co-murals/24.jpg";
import co_mural25 from "../assets/co-murals/25.jpg";
import co_mural26 from "../assets/co-murals/26.jpg";
import co_mural27 from "../assets/co-murals/27.jpg";
import co_mural28 from "../assets/co-murals/28.jpg";

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
import teaching5 from "../assets/teaching/5.jpg";
import teaching6 from "../assets/teaching/6.jpg";
import teaching7 from "../assets/teaching/7.jpg";
import teaching8 from "../assets/teaching/8.jpg";
import teaching9 from "../assets/teaching/9.jpg";
import teaching10 from "../assets/teaching/10.jpg";
import teaching11 from "../assets/teaching/11.jpeg";
import teaching12 from "../assets/teaching/12.jpeg";
import teaching13 from "../assets/teaching/13.jpeg";
import teaching14 from "../assets/teaching/14.jpeg";
import teaching15 from "../assets/teaching/15.jpeg";
import teaching16 from "../assets/teaching/16.jpeg";
import teaching17 from "../assets/teaching/17.jpeg";
import teaching18 from "../assets/teaching/18.jpeg";
import teaching19 from "../assets/teaching/19.jpg";
// import teaching20 from "../assets/teaching/20.jpeg";

import cultural1 from "../assets/cultural/1.jpg";
import cultural2 from "../assets/cultural/2.jpg";
import cultural3 from "../assets/cultural/3.jpg";
import cultural4 from "../assets/cultural/4.jpg";
import cultural5 from "../assets/cultural/5.jpg";
import cultural6 from "../assets/cultural/6.jpeg";
import cultural7 from "../assets/cultural/7.jpeg";
import cultural8 from "../assets/cultural/8.jpeg";
import cultural9 from "../assets/cultural/9.jpeg";
import cultural10 from "../assets/cultural/10.jpeg";
import cultural11 from "../assets/cultural/11.jpeg";
import cultural12 from "../assets/cultural/12.jpeg";
import cultural13 from "../assets/cultural/13.jpeg";
import cultural14 from "../assets/cultural/14.jpeg";
import cultural15 from "../assets/cultural/15.jpeg";
import cultural16 from "../assets/cultural/16.jpeg";
import cultural17 from "../assets/cultural/17.jpeg";
import cultural18 from "../assets/cultural/18.jpeg";

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
  }, [isOpen]); // depend on isOpen

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // <-- there's no onClose prop; this throws
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
      mural17_1,
      mural17_2,
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
      mural30,
      mural31,
      mural32,
      mural33_1,
      mural33,
      mural34,
      mural35,
      mural36,
      mural37,
    ],
    "community murals": [
      co_mural1,
      co_mural2,
      co_mural3,
      co_mural4,
      co_mural5,
      co_mural6,
      co_mural7,
      co_mural8,
      co_mural9,
      co_mural10,
      co_mural11,
      co_mural12,
      co_mural13,
      co_mural14,
      co_mural15,
      co_mural16,
      co_mural17,
      co_mural18,
      co_mural19,
      co_mural20,
      co_mural21,
      co_mural22,
      co_mural23,
      co_mural24,
      co_mural25,
      co_mural26,
      co_mural27,
      co_mural28,
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
    "art instructor": [
      teaching1,
      teaching2,
      teaching3,
      teaching4,
      teaching5,
      teaching6,
      teaching7,
      teaching8,
      teaching9,
      teaching10,
      teaching11,
      teaching12,
      teaching13,
      teaching14,
      teaching15,
      teaching16,
      teaching17,
      teaching18,
      teaching19,
    ],
    "cultural makeup": [
      cultural1,
      cultural2,
      cultural3,
      cultural4,
      cultural5,
      cultural6,
      cultural7,
      cultural8,
      cultural9,
      cultural10,
      cultural11,
      cultural12,
      cultural13,
      cultural14,
      cultural15,
      cultural16,
      cultural17,
      cultural18,
    ],
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
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
            ></button>
            <div className="tabs-container">
              <div className="tabs">
                {[
                  "murals",
                  "community murals",
                  "prints",
                  "embossing aluminum",
                  "cultural makeup",
                  "wood",
                  "acrylics and mix media",
                  "art instructor",
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
