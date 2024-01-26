/*
  File: Assignment No. 2
  Student’s Name: John Raineir Po-on
  StudentID: 301363442
  Date: 01/21/2024
*/

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import webImg from '../../../web.png'
import mobileImg from '../../../mobile.png'
import progImg from '../../../prog.png'
import facebookIcon from '../../../facebook.png'
import instagramIcon from '../../../instagram.png'
import twitterIcon from '../../../twitter.png'
import linkinIcon from '../../../linkin.png'



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3pmg3am', 'template_515ihtk', form.current, 'IWEJPN85-KIIbaWCm')
            .then((result) => {
              console.log(result.text);
              e.target.reset();

              
              alert('Email Sent !');
            }, (error) => {
              console.log(error.text);
            });
      };
      
  return (
    <section id='contactPage'>
        <div id='services'>
            <h1 className='contactPageTitle'>Services</h1>
            <p className='servicesDesc'>
            Web Development  |  Mobile Apps  |  General Programming  |  Etc.
            </p>
            <div className='servicesImgs'>
                <img src={webImg} alt='Services' className='servicesImg'/>
                <img src={mobileImg} alt='Services' className='mobileImg'/>
                <img src={progImg} alt='Services' className='servicesImg'/>
            </div>

        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='user_name'/>
            <input type='text' className='email' placeholder='Your Email' name='user_email'/>
            <textarea rows='5' className='msg' placeholder='Your Message' name='message' ></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <br></br>

            <div className='links'>
                <a href="https://facebook.com/johnraineirpoon/"><img src={facebookIcon} alt='Facebook' title="Facebook" className='link'/></a>
                <a href="https://www.instagram.com/jikaiky/"><img src={instagramIcon} alt='Instagram' title="Instagram" className='link'/></a>
                <a href="https://twitter.com/jikaiky/"><img src={twitterIcon} alt='Twitter' title="Twitter" className='link'/></a>
                <a href="https://www.linkedin.com/in/johnraineirpoon/"><img src={linkinIcon} alt='LinkIn' title="LinkIn" className='link'/> </a>
            </div>
        </form>
            </div>
        </section>
    )
}

export default Contact
