import React from 'react'
import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className='footer'>
        <img src={Logo} alt="logo" />
        <span>MERN APP &copy; <b>Sharat's Lab</b></span>
    </footer>
  )
}

export default Footer