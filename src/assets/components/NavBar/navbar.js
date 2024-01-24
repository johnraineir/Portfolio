/*
  File: Assignment No. 2
  Student’s Name: John Raineir Po-on
  StudentID: 301363442
  Date: 01/21/2024
*/

import React, { useState } from 'react'
import './navbar.css'
import logo from '../../logo.png'
import contactImg from '../../contact.png'
import { Link } from 'react-scroll'
import menu from '../../menu.png'

const Navbar = () => {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt='Logo' className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link> 
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Project</Link>
            <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Services</Link>

        </div>

        
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me</button>

            <img src={menu} alt='Logo' className='mobMenu' onClick={()=>setShowmenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Projects</Link>
            <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Services</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-350} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Contact</Link>
            </div>
    </nav>
  )
}

export default Navbar