import AddUser from './components/addUser/AddUser'
import Collection from './components/collection/Collection'
import FeaturedArtworks from './components/featured_artworks/Featured_artworks'
import Topcreator from './components/topcreator/Topcreator'
import './dashboard.css'

function Dashboard() {
  return (
    <body>
      <AddUser />
      <section><Collection /></section>
      <section><FeaturedArtworks /></section>
      <section><Topcreator /></section>
    </body>
  )
}

export default Dashboard