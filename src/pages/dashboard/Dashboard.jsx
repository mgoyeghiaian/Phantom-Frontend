import AddUser from './components/addUser/AddUser'
import Collection from './components/collection/Collection'
import Topcreator from './components/topcreator/Topcreator'
import './dashboard.css'

function Dashboard() {
  return (
    <div>
      <AddUser />
      <section><Collection /></section>
      <section><Topcreator /></section>
    </div>
  )
}

export default Dashboard