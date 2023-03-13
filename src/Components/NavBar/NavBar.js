import React from 'react'
import './NavBar.scss'

import { Link } from 'react-router-dom'

import Logo from '../../Assets/Logo.png'

const NavBar = () => {
  return (
    <>
      <Link to='/' class='header'>
        <Link to='/'><img src={Logo} /></Link>
        <Link to='/'>GRETCHEN WHITNEY HIGH SCHOOL CYBERSECURITY CLUB</Link>
      </Link>
      <div class='nav'>
          <Link to='/about'>About</Link>
          <Link to='/registration'>Join</Link>
          <Link to='/updates'>Updates</Link>
          <Link to='/outreach'>Outreach</Link>
          <Link to='/cybercamp'>CyberCamp</Link>
          <Link to='/partners'>Partners</Link>
          <Link to='/training'>Training</Link>
      </div>
      <button class='mobile-nav'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
        <h2>Menu</h2>
      </button>
      <hr />
    </>
  )
}

export default NavBar