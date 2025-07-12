import './Work.css'
import Modal from './Modal'

import acrylics4 from "../assets/acrylics/4.jpg";
import wood1 from "../assets/wood/1.jpg";
import video1 from "../assets/aluminio/video1.mp4";


const Work = () => {
  return (
    <div id='work' className='work-container'>
<div className="pic-container">
  <img src={acrylics4} alt="" className='pic neon'/>
  <img src={wood1} alt="" className='pic pic-2'/>
  <img src={acrylics4} alt="" className='pic pic-3'/>
  <img src={acrylics4} alt="" className='pic pic-4'/>
  <img src={acrylics4} alt="" className='pic pic-5'/>
  <img src={acrylics4} alt="" className='pic pic-6'/>
  <img src={acrylics4} alt="" className='pic pic-7'/>
  <img src={acrylics4} alt="" className='pic pic-8'/>
</div>
<div className="modal-container">
        <Modal />
        </div>
    
    </div>
  )
}

export default Work
