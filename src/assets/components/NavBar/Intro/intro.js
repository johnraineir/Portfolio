/*
  File: Assignment No. 2
  Student’s Name: John Raineir Po-on
  StudentID: 301363442
  Date: 01/21/2024
*/

import React from 'react'
import './intro.css'
import gb from '../../../gb.png'
import btnImg from '../../../bag.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
            <span className='hello' >Hello,</span>
            <span className='introText'>I'm <span className='introName'>John</span> <br/>
            
            <br></br>
            
            Mission</span>
            <p className='introPara'>As a software engineering student, tackle a real-world <br></br>
            problem through innovative software solutions. <br></br>Collaborate, master cutting-edge 
            technologies, <br></br>and create user-centric applications. <br></br>Demonstrate impact through 
            effective collaboration <br></br>and agile development, leaving a lasting mark on the field.</p>
            
        </div>

        <img src={gb} alt='Profile' className='bg'/>

        
    </section>
  )
}

//<Link><button className='btn'><img src={btnImg} alt='Hire'className='btnImg'/>Hire Me</button></Link>

export default Intro

