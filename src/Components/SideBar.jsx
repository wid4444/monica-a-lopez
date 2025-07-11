import React, { useState, useEffect } from 'react';
import { BiSolidBriefcaseAlt2 } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';
import { IoMenu, IoHome, IoApps } from 'react-icons/io5';
import { IoMdMail, IoIosCloseCircle } from 'react-icons/io';
import './SideBar.css';

const SideBar = () => {
  const [nav, setNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const sections = [
      { id: 'home', ref: document.getElementById('home') },
      { id: 'about', ref: document.getElementById('about') },
      { id: 'work', ref: document.getElementById('work') },
      // { id: 'projects', ref: document.getElementById('projects') },
      { id: 'contact', ref: document.getElementById('contact') },
    ];

    const handleScroll = () => {
      const currentOffset = window.pageYOffset + window.innerHeight / 2;

      const current = sections.find(
        (section) =>
          section.ref &&
          section.ref.offsetTop <= currentOffset &&
          section.ref.offsetTop + section.ref.offsetHeight > currentOffset
      );

      if (current) {
        setCurrentSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHighlightClass = (id) => {
    return currentSection === id ? 'highlight' : '';
  };

  

  // const getSpanClass = () => {
  //   switch (currentSection) {
  //     case 'home':
  //       return 'span-home';
  //     case 'about':
  //       return 'span-about';
  //     case 'work':
  //       return 'span-work';
  //     case 'contact':
  //       return 'span-contact';
  //     default:
  //       return '';
  //   }
  // };

  return (
    <div>
      {nav ? (
        <IoIosCloseCircle
          onClick={handleNav}
          className="menu-icon"
          size={40}
        />
      ) : (
        <IoMenu onClick={handleNav} className="menu-icon menu" size={45} />
      )}

      {nav && (
        <div className="nav-menu">
          <a onClick={handleNav} href="#home" className="nav-link">
            <IoHome size={20} />
            <span>Home</span>
          </a>
          <a onClick={handleNav} href="#about" className="nav-link">
            <FaUserTie size={20} />
            <span>About Me</span>
          </a>
          <a onClick={handleNav} href="#work" className="nav-link">
            <BiSolidBriefcaseAlt2 size={20} />
            <span>Portfolio</span>
          </a>
          {/* <a onClick={handleNav} href="#projects" className="nav-link">
            <IoApps size={20} />
            <span>Projects</span>
          </a> */}
          <a onClick={handleNav} href="#contact" className="nav-link">
            <IoMdMail size={20} />
            <span>Contact</span>
          </a>
        </div>
      )}

      <div className="sidebar">
        <a href="#home" title="Home" className={`icon ${getHighlightClass('home')}`}>
          {/* <IoHome size={25} /> */}
          <span className="rotated-text">Home</span>
          {/* <span className={`rotated-text ${getSpanClass()}`}>Home</span> */}
        </a>
        <a href="#about" title="About" className={`icon ${getHighlightClass('about')}`}>
          {/* <FaUserTie size={25} /> */}
          <span className="rotated-text">About</span>
          {/* <span className={`rotated-text ${getSpanClass()}`}>About</span> */}

        </a>
        <a href="#work" title="Work" className={`icon ${getHighlightClass('work')}`}>
          {/* <BiSolidBriefcaseAlt2 size={25} /> */}
          <span className="rotated-text">Portfolio</span>
          {/* <span className={`rotated-text ${getSpanClass()}`}>Portfolio</span> */}
        </a>
       

        {/* <a href="#projects" title="Projects" className={`icon ${getHighlightClass('projects')}`}>
          <IoApps size={25} />
        </a> */}
        <a href="#contact" title="Contact" className={`icon ${getHighlightClass('contact')}`}>
          {/* <IoMdMail size={25} /> */}
          <span className="rotated-text">Contact</span>
          {/* <span className={`rotated-text ${getSpanClass()}`}>Contact</span> */}

        </a>
        

      </div>
    </div>
  );
};

export default SideBar;
