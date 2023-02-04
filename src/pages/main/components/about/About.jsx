import React, { useState } from 'react'
import Aboutimg from '../../../../assets/About.png';
import './About.css'

function About() {
  const [showmore, Setshow] = useState();
  return (
    <div className='about-container'>

      <div className='about-img'>
        <img alt='About Us' src={Aboutimg} />
      </div>
      <div className='about-header'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='about-text'>
        <h1>Get Popular NFT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinarLorem ipsum
          <div className={`hiddenContent ${showmore ? 'show' : ''}`}> dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar</div></p>
      </div>
      <div className='about-button'>
        <button className='button ' value="Show More" onClick={() => Setshow(!showmore)}>
          Show More
        </button>
      </div>

    </div>

  )
}

export default About

