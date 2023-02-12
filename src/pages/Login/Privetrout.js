import { Navigate } from "react-router-dom"
import Cookies from 'js-cookie';
function Privetroute({ children }) {

  const token = Cookies.get('jwt_auth')
  /** Checking If theres token to take to the child */
  if (token) {

    return children;

  }

  /** Checking If theres no token Give Alert And Navigate To Login */


  return alert('You are not allowed to access this part of the site.'), <Navigate to="/login" />


}
export default Privetroute