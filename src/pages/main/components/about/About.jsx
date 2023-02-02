import React from 'react'
import Somthing from '../../../../assets/AboutImage.png';
import './About.css'

function About() {
  return (

    <div className='about-container'>
      <div className='about-img'>
        <img src={Somthing} />
      </div>
      <div className='about-text'>
        <div>
          <div className='about-header'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <h1>Get Popular NFT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinarLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar</p>
        </div>
        <div className='about-button'>
          <button className='button'>
            Show More
          </button>
        </div>
      </div>

  )
}

export default About