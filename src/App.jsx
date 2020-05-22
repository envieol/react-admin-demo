import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
function App() {
  return (
    <Router>
        <Switch>
            <Route exact strict path={"/login"} component={Login}/>
            <Route exact strict path={"/admin"} component={Admin}/>
        </Switch>
    </Router>
  );
}

export default App;
