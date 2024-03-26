import React from 'react'
import './Intro.css'
import myImg from '../assets/me.jpeg'
import {Link} from 'react-scroll'
import Hire from '../assets/hireme.png'


function Intro() {

 
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
            <button className="btn">
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