import React from 'react'
import './App.css';
export default function Home() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
  return (
    <>  
        
        <section id="reg" className="quickRegister"><a href="#last"><button style={{marginLeft:'900px',height:'60px',width:'160px',borderRadius:'30px'}} className="btn btn-dark">Connect with POCs</button></a></section>
<section>
  <div className="container reveal fade-bottom">
    <h2 style={{color:'#ffc99d',fontSize:'64px'}}>What is InnoHacks ??</h2>
    <div className="text-container">
      <div className="text-box">
        
        <p className='pOverview'>
        Welcome to InnoHacks, Hackathon organized by D'Code, the Competitive Programming Society of NSUT (Netaji Subhas University of Technology). InnoHacks is a melting pot of creativity, innovation, and collaboration, where bright minds come together to push the boundaries of technology and solve real-world problems.
        </p>
      </div>
      <div className="text-box">
        
        <p className='pOverview'>
        Driven by a passion for innovation, InnoHacks provides a platform for participants to unleash their creativity, develop groundbreaking solutions, and network with like-minded individuals. From coding novices to seasoned hackers, all are welcome to join this exhilarating journey of ideation and creation.
        </p>
      </div>
      <div className="text-box">
        
        <p className='pOverview'>
        With a diverse array of challenges spanning various domains such as artificial intelligence, cybersecurity, fintech, and more, participants have the opportunity to explore their interests and showcase their skills. Join us at InnoHacks for an unforgettable experience of innovation, teamwork, and growth.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container reveal fade-left">
    <h2 style={{color:'#ffc99d',fontSize:'64px',fontWeight:'bold'}}>FAQs............................................................................</h2>
    <div className="text-container">
      <div className="text-box">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>How Can I Participate??</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
        <a href="#reg"><strong>Register Here</strong></a>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Are there any specific themes for the Projects??</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      Yes, themes for the InnoHacks will be communicated to participants on the day of the event.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>How many people should be there in the team ??</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      A team should consist of minimum 1 member and maximum 4 members including team Leader.
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="text-box">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        <strong>Who should Participate ??</strong>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      Everyone is welcome to participate, regardless of any prior experience in the coding. We just encourage the passion of coding among the upcoming dvelopers of the future.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <strong>Is there any registration fee ??</strong>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      No, our hackathon is free to participate.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <strong>Will food be provided during the hackathon</strong>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      Yes , food and beverages will be provided by moksha .
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="text-box">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
        <strong>How long is the hackathon & when does it take place ??</strong>
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      This is a 24 hour Hackathon and will start on 6th of March and end on the 7th of march .
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
        <strong>Will there be mentors available for guidance ??</strong>
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      Absolutely! Experienced mentors will be on hand throughout the event to offer guidance, answer questions, and assist teams in project development.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
        <strong>How are the projects judged ??</strong>
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div id="accord" className="accordion-body">
      Projects are evaluated based on creativity, problem-solving, technical implementation, and overall impact within the specified themes. A panel of seasoned judges will assess the submissions.
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</section>

<section id="last">
  <div className="container reveal fade-right">
    <h2 style={{color:'#ffc99d'}}>Still Have Queries ???</h2>
    <div className="text-container">
      <div className="text-box">
        <h3>Garima</h3>
        <a href="tel:9560884883">Call 9560884883</a>
      </div>
      <div style={{marginLeft:'60%'}} className="text-box">
        <h3>Muskan</h3>
        <a href="tel:9302631539">Call 9302631539</a>
      </div>
      
    </div>
  </div>
</section> 
    </>
  )
}
