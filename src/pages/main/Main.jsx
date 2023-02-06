import './main.css'
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Sponsored from './components/sponsored/Sponsored.jsx';
import About from './components/about/About.jsx'
import Collection from './components/collection/Collection.jsx'
import Topcreator from './components/topcreator/Topcreator.jsx'
import FAQ from './components/FAQ/Faq.jsx'
import CTA from './components/CTA/Cta.jsx'
import FeaturedArtworks from './components/featured_artworks/Featured_artworks.jsx'
import Footer from './components/footer/Footer.jsx'

function Main() {
  return (
    <div className='main' >
      <Navbar />
      <section id='home'><Home /></section>
      <section id='sponsored'><Sponsored /></section>
      <section id='about'> <About /></section>
      <section id='collection'><Collection /></section>
      <section id='topcreator'><Topcreator /></section>
      <section id='faq'><FAQ /></section>
      <section id='cta'><CTA /></section>
      <section id='featuredartworks'><FeaturedArtworks /></section>
      <section id='footer'><Footer /></section>
    </div>
  )
}

export default Main