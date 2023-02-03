import React from "react"
import { Navigate } from "react-router-dom"
import Cookies from 'js-cookie';

function Privetrout({ children }) {

  const token = Cookies.get('jwt_auth')

  if (token) {
    return children;

  }
  return alert('only admins are allowed to access this page.'), <Navigate to="/login" />
}

export default Privetrout