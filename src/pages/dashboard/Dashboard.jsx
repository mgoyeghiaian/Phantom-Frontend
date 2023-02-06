import Collection from './components/collection/Collection';
import Faq from './components/FAQ/Faq'
import FeaturedArtworks from './components/featured_artworks/Featured_artworks'
import Topcreator from './components/topcreator/Topcreator'
import './dashboard.css'

function Dashboard() {

  return (
    <div>
      <div><h1>Dashboard</h1></div>
      <section><Collection /></section>
       <section><FeaturedArtworks /></section>
      <section><Topcreator /></section>
      <section><Faq /></section> 

    </div>

  )
}

export default Dashboard;