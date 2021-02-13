import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";

  // esta ruta privada va a ser usada en las rutas que requieran autenticación 
  /* recibe
    component: () => {…}
  y ...rest son los parametros restantes
  {
    computedMatch: {path: "/student", url: "/student", isExact: true, params: {…}}
    exact: true
    location: {pathname: "/student", search: "", hash: "", state: undefined, key: "uedmkm"}
    path: "/student"
  }
  */
function PrivateRoute( { component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      //si hay usuario render el componente, sino mandarlo a login
      render=
      {props => authTokens ? 
        (<Component {...props} />
        ) : (
        <Redirect to={"/login"}/>
        )
      }
    />
  );
}

export default PrivateRoute;