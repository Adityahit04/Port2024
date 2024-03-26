import React from 'react'
import { useRef } from 'react';
import './contact.css'
import walmart from './assets/walmart.png'
import Adobe from "./assets/adobe.png";
import Microsoft from "./assets/microsoft.png";
import FB from "./assets/facebook.png";
import Facebook from './assets/facebook-icon.png'
import Instagram from "./assets/instagram.png";
import X from "./assets/twitter.png";
import Youtube from "./assets/youtube.png";
import emailjs from "@emailjs/browser";


function Contact() {
  function check(){
    console.log("clicked")
  }
   const form = useRef()

     const sendEmail = (e) => {
       e.preventDefault();

       emailjs
         .sendForm("service_khn0v9g", "template_dndgcsu", form.current, {
           publicKey: "CdMm2YFDg6sWO6R5U",
         })
         .then(
           () => {
             console.log("SUCCESS!");
           },
           (error) => {
             console.log("FAILED...", error.text);
           }
         );
     };

  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className="contactpagetitle">My Clients</h1>
        <p className="clientdesc">
          Clients: My current Clients are  
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="" className="clientimg" />
          <img src={Adobe} alt="" className="clientimg" />
          <img src={Microsoft} alt="" className="clientimg" />
          <img src={FB} alt="" className="clientimg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactpagetitle">Contact me</h1>
        <span className="contactdesc">Feel free to get in touch : Please fill the form</span>
        <form ref={form} className="contactform" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Name.." name='your_name' />
          <input type="email" className="email" placeholder="Email..." name='your email' />
          <textarea
            name="message"
            rows="5"
            placeholder="message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submit" onClick={check}>
            Submit
          </button>
          <div className="links">
            <img src={Facebook} alt="" className="link" />
            <img src={X} alt="" className="link" />
            <img src={Instagram} alt="" className="link" />
            <img src={Youtube} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact