import { useState } from "react";
import "./Modal.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import mural1 from "../assets/murals/1.jpg";
import mural2 from "../assets/murals/2.jpg";
import mural3 from "../assets/murals/3.jpg";
import mural4 from "../assets/murals/4.jpg";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState("murals");

  const galleries = {
    murals: ["mural1.jpg", "mural2.jpg"],
    acrylics: ["acrylic1.jpg", "acrylic2.jpg"],
    teaching: ["teaching1.jpg", "teaching2.jpg"],
    cultural: ["cultural1.jpg", "cultural2.jpg"],
  };

  const galleryImages = {
    murals: [mural1, mural2, mural3, mural4, mural1, mural2, mural3, mural4],
    acrylics: [mural2],
    teaching: [mural3, mural1, mural2, mural3, mural4],
    cultural: [mural4, mural1, mural2, mural3, mural4],
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
              X
            </button>
            <div className="tabs-container">
            <div className="tabs">
              {["murals", "acrylics", "teaching", "cultural"].map((section) => (
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

            <div className="gallery-container">
              {galleryImages[activeGallery].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${activeGallery} ${index}`}
                  className="gallery-img"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
