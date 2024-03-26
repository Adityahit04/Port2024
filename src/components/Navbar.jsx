import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../assets/logo.png'
import contact from '../assets/contact.png'
import menu from '../assets/menu.png'


function Navbar() {
  const [showmenu, setShowMenu]=useState(false)
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="" className="logo" />
        <div className="desktopmenu">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="intro"
            className="listItems"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="skills"
            className="listItems"
          >
            About
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="works"
            className="listItems"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="contactpage"
            className="listItems"
          >
            Client
          </Link>
        </div>

        <button
          className="desktopmenubtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contact} alt="" className="desktopmenuImg" />
          Contact Me
        </button>
        <img
          src={menu}
          alt="menu"
          className="mobmenu"
          onClick={() => setShowMenu(!showmenu)}
        />
        <div
          className="navmenu"
          style={{ display: showmenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="intro"
            className="mlistItems"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="skills"
            className="mlistItems"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="works"
            className="mlistItems"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="contactpage"
            className="mlistItems"
            onClick={() => setShowMenu(false)}
          >
            Client
          </Link>
          <button
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="contact"
            className="mlistItems"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
                 setShowMenu(false)
            }}
            
          >
            Contact
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar