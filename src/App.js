import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Admin from "./pages/Admin"
import Student from "./pages/Student"
import NotFound from "./pages/NotFound"
import CharProfile from "./pages/CharProfile";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/student" component={Student} />
          <PrivateRoute exact path="/char/:name" component={CharProfile} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;