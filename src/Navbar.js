import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',backgroundColor:'black'}}>
      <Link to="/"><button id="navBtn" className="btn btn-dark">Home</button></Link>
      <Link to='/aboutus'><button id="navBtn" className="btn btn-dark">About Us</button></Link>
      <Link to="/eventDetails"><button id="navBtn" className="btn btn-dark">Event Details</button></Link>
      <Link to='/contactus'><button id="navBtn" className="btn btn-dark">#Our Socials</button></Link>
      <a href="https://innohacks.devfolio.co/"><button id="navBtn" className='btn btn-dark'>Redirect to Devfolio</button></a>
    </div>
  )
}
