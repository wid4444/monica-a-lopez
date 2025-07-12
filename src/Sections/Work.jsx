import "./Work.css";
import Modal from "./Modal";

import acrylics4 from "../assets/acrylics/4.jpg";
import wood1 from "../assets/wood/1.jpg";
// import video1 from "../assets/aluminio/video1.mp4";

const Work = () => {
  const images = [
    acrylics4,
    wood1,
    acrylics4,
    acrylics4,
    acrylics4,
    acrylics4,
    acrylics4,
    acrylics4,
  ];

  return (
    <div id="work" className="work-container">
      <div className="pic-container">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="pic" />
        ))}
      </div>
      <div className="modal-container">
        <Modal />
      </div>
    </div>
  );
};

export default Work;
