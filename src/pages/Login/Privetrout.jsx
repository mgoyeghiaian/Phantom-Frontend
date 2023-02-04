import { Navigate } from "react-router-dom"
import Cookies from 'js-cookie';
function Privetrout({ children }) {

  const token = Cookies.get('jwt_auth')

  if (token) {
    return children;

  }


  return (
    alert('You are not allowed to access this part of the site.'), <Navigate to="/login" />




  )
}
export default Privetrout