import React from 'react'
import { Link } from 'react-router-dom'
export default function AboutUS() {
  return (
    <>
        <div className="typewriter">
            <h1>Welcome to InnoHacks,<br /> where innovation meets collaboration,<br /> and creativity knows no bounds. <br /> We are a passionate community of developers , <br /> designers, <br /> entrepreneurs, <br /> and enthusiasts dedicated to pushing the <br /> boundaries of technology & <br /> solving real-world problems <br /> through innovation.</h1>
        </div>
        <div id="aboutZoom">
        <div  style={{fontSize:'32px',color:'whitesmoke'}} className="w3-animate-zoom">
        <span style={{fontSize:'64px',color:'whitesmoke',display:'flex',justifyContent:'center',textDecorationLine:'grammar-error',fontWeight:'900'}}>Our Story</span><br />
 InnoHacks was born out of a vision to create a platform that fosters innovation, collaboration, and learning in the ever-evolving landscape of technology. Over the years, we've brought together thousands of like-minded individuals from diverse backgrounds, united by their passion for coding, designing, and building solutions that make a difference.
<br /><br /><br />
<span style={{fontSize:'64px',color:'whitesmoke',display:'flex',justifyContent:'center',textDecorationLine:'grammar-error',fontWeight:'900'}}>What We Stand For</span> <br />
At InnoHacks, we believe in the power of collaboration and the limitless possibilities when passionate individuals come together. Whether you're a seasoned developer, a first-time hacker, or someone with a brilliant idea, there's a place for you in our community. We strive to provide an inclusive and welcoming environment where everyone can learn, grow, and make meaningful connections.

Our Mission:
Our mission is to inspire, educate, and empower the next generation of innovators. Through our hackathons, workshops, and mentorship programs, we aim to cultivate creativity, problem-solving skills, and entrepreneurship. We're committed to providing resources, support, and opportunities for individuals to turn their ideas into reality and make a positive impact on the world.
        </div><br /><br /><br /><br />
        <h1 style={{color:'orange',fontSize:'64px',display:'flex',justifyContent:'center'}}>What's on the Table for you</h1>
        <ol>
	<li style={{fontSize:'32px'}}>Exciting hackathon challenges covering a wide range of themes and industries</li>
	<li style={{fontSize:'32px'}}>Workshops and tech talks by industry experts to expand your skillset and knowledge</li>
	<li style={{fontSize:'32px'}}>Networking opportunities to connect with fellow hackers, mentors, and potential collaborators</li>
	<li style={{fontSize:'32px'}}>Prizes and recognition for the most innovative and impactful projects</li>
	<li style={{fontSize:'32px'}}>A supportive and inclusive community where everyone is encouraged to participate and contribute</li>
</ol>
        </div>
    </>
  )
}
