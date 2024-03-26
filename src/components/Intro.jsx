import React from 'react'
import './Intro.css'
import myImg from '../assets/me.jpeg'
import {Link} from 'react-scroll'
import Hire from '../assets/hireme.png'


function Intro() {


   const handleDownload = () => {
     
     const pdfUrl = "portfolio/src/assets/Aditya singh.pdf";

    
     const link = document.createElement("a");
     link.href = pdfUrl;
     link.download = "Aditya singh.pdf"; 
     document.body.appendChild(link);

     
     link.click();

    
     document.body.removeChild(link);
   };

 
  return (
    <>
      <section id="intro">
        <div className="introsection">
          <span className="hello">Hello</span>
          <br />
          <span className="introtext">
            I'm <span className="introname">Aditya singh</span>
            <br />
            Front End Developer
          </span>
          <p className="intropara">
            Front-end developer with 2 years of experience in building
            user-friendly and responsive websites.
          </p>
          <Link>
            <button className="btn" onClick={handleDownload}>
              <img src={Hire} alt="Hire me" className="Hire" />
              Hire Me
            </button>
          </Link>
        </div>
        <img src={myImg} alt="profile" className="bg" />
      </section>
    </>
  );
}

export default Intro