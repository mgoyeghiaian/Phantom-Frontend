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
        <a href='#collection'>Product</a>
        <a href='#Res'>Resource</a>
        <a href='#Term'>Term & Condition</a>
        <a href='#faq'>FAQ</a>
      </div>
      <div className='footer-company'>
        <h1>Company</h1>
        <a href='#OurTeam'>Our Team</a>
        <a href='#Partner'>Partner With Us</a>
        <a href='#Privacy'>Privacy & Policy</a>
        <a href='#featuredartworks'>Fratures</a>
      </div>
      <div className='footer-contact' >
        <h1>Contact</h1>
        <a href='tel:+0123456789'>+012 3456789</a>
        <a href="mailto:adorableprogrammer@gmail.com">adorableprogrammer@gmail.com</a>
      </div>
      <div className='icons'>
        <a href='https://youtube.com' target='_blank' rel="noreferrer"> <img alt='Youtube' src={Youtube} /></a>
        <a href='https://Discord.com' target='_blank' rel="noreferrer">    <img alt='Discord' src={Discord} /></a>
        <a href='https://Instagram.com' target='_blank0' rel="noreferrer"> <img alt='Instagram' src={Instagram} /></a>
      </div>
      <div className='footer-copy'>
        <p>Created by TEAM 3 ||  Right Reserved! </p>
      </div>

    </div>
  )
}
export default Footer

