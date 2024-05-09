import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div style={{backgroundColor:'orangered',color:'white'}} className='footer p-3'>
      <p style={{fontSize:'35px'}} className='text-center '>&copy; Sasura holds all rights</p>
      <p style={{color:'white',fontSize:'15px'}}className='text-center mt-3'>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/policy'>Privacy Policy</Link>
    </p>
    </div>
    </>
  )
}

export default Footer
