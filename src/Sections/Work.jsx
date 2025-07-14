import "./Work.css";
import Modal from "./Modal";

import pic1 from "../assets/pic/1.jpeg";
import pic2 from "../assets/pic/2.jpeg";
import pic3 from "../assets/pic/3.jpeg";
import pic4 from "../assets/pic/4.jpeg";
import pic5 from "../assets/pic/5.jpeg";
import pic6 from "../assets/pic/6.jpeg";
import pic7 from "../assets/pic/7.jpeg";
import pic8 from "../assets/pic/8.jpeg";


const Work = () => {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
  ];

  return (
    <div id="work" className="work-container">
      <div className="portfolio-title-container">
      <h1 className="portfolio-title">
      Featured Artwork 
      </h1>
      </div>
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
