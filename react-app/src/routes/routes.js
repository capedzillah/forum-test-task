import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "../components/login";
import Forum from "../components/forum";

import PrivateRoute from './private_route';

class ReactRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/forum" component={ <Forum/> } />
        <Route render={() => <Redirect to="/forum"/>}/>
      </Switch>
    );
  }
}

export default ReactRouter;