import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Contact = () => {
  const theme = useContext(themeContext);
const darkMode=theme.state.darkMode; 
    const form=useRef();
    const [done ,setDone]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_iolts86', 'template_gg2dua5', form.current, {
            publicKey: 'DPD-uyi93SwRo4M6X',
          })
          .then(
            () => {
                setDone(true);
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <div className="contact-form" id="contact">
          <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in Touch</span>
              <span>Contact me</span>
              <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
              ></div>
            </div>
          </div>
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user"  placeholder="Name"/>
              <input type="email" name="user_email" className="user" placeholder="Email"/>
              <textarea name="message" className="user" placeholder="Message"/>
              <input type="submit" value="Send" className="button"/>
              <span>{done && "Thanks for Contacting me"}</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div>
        </div>
      );
    };
    
    export default Contact;