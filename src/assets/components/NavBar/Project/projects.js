/*
  File: Assignment No. 2
  Student’s Name: John Raineir Po-on
  StudentID: 301363442
  Date: 01/21/2024
*/

import React from 'react'
import './projects.css'
import me from '../../../me.jpg'
import pdfIcon from '.././../../pdf.png'



const Projects = () => {
  return (
    <section id='projects'>
        <span className='projTitle'>About</span>
        <span className='projDesc'></span>
        <div className='projBars'>
            <div className='projBar'>
                <img src={me} alt='' className='projBarImg'/>
                <div className='projBarText'>
                    <h2>John Raineir Po-on</h2>
                    <p>I am a Filipino currently pursuing a fast-track program in software engineering. I also have a deep passion for the exhilarating freedom of motorcycling, finding joy in the unique adventures on the open road. Additionally, I am an avid enthusiast of MMORPGs, drawn to their limitless adventures and the camaraderie they offer. In my role as a web developer, I creatively transform ideas into functional and aesthetically pleasing online experiences, merging technical expertise with artistic sensibilities.</p>
                    <h5>Download my resume here <a href="https://johnraineirpoon.s3.amazonaws.com/resume.pdf"><img src={pdfIcon} alt='Pdf' title="Download" className='pdfIcon'/></a></h5>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects