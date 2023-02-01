import React from "react"
import { Route, Navigate } from "react-router-dom"

function Privetrout({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (<Navigate to={{ pathname: '/login', state: { from: props.location } }} />
          );
        }
      }}
    />)
}
export default Privetrout