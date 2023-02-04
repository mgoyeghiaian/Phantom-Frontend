import React from 'react'
import './Footer.css'
import Logo from '../../../../assets/websiteicon/PHANTOM (2).svg'
import Youtube from '../../../../assets/icons/youtubeicon.svg'
import Discord from '../../../../assets/icons/discordicon.svg'
import Instagram from '../../../../assets/icons/instagram.svg'
import './Footer'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <div>
          <img alt='Phantom' src={Logo} />
        </div>
        <p>
          The best NFT marketplace website in the world and feel your experience in selling or buy our work
        </p>
      </div>
      <div className='footer-about'>
        <h1> About</h1>
        <p>Product</p>
        <p>Resource</p>
        <p>Term & Condition</p>
        <p>FAQ</p>
      </div>
      <div className='footer-company'>
        <h1>Company</h1>
        <p>Our Team</p>
        <p>Partner With Us</p>
        <p>Privacy & Policy</p>
        <p>Fratures</p>
      </div>
      <div className='footer-contact' >
        <h1>Contact</h1>
        <p>+012 3456789</p>
        <p>adorableprogrammer@gmail.com</p>
      </div>
      <div className='icons'>
        <img alt='Youtube' src={Youtube} />
        <img alt='Discord' src={Discord} />
        <img alt='Instagram' src={Instagram} />
      </div>
      <div className='footer-copy'>
        <p>Created by TEAM 3 ||  Right Reserved! </p>
      </div>

    </div >
  )
}
export default Footer

