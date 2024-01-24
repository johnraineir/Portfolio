/*
  File: Assignment No. 2
  Student’s Name: John Raineir Po-on
  StudentID: 301363442
  Date: 01/21/2024
*/

import React from 'react'
import './skills.css'
import proj1 from '../../../proj1prog.png'
import proj2 from '../../../proj2database.png'
import proj3 from '../../../proj3software.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Projects</span>
        <span className='skillDesc'></span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={proj1} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Coffee Shop App</h2>
                    <p>I successfully implemented the Order class and associated web form in our Coffee Shop App, providing a seamless and efficient way for users to place and manage their orders.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={proj2} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Connecting Database to JDBC</h2>
                    <p>I contributed to the improvement of our database by assisting in various parts and documenting the process. Additionally, my role is also connecting our database to JDBC, enhancing its functionality and ensuring a seamless integration with our applications.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={proj3} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Uber Software System Design</h2>
                    <p>My role in this project are creating and enhancing various visual representations, such as GUI, UML diagrams and system diagrams, to facilitate a clearer understanding of our project, contributing to the overall success of our collaborative efforts.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills