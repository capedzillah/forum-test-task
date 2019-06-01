import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/login";
import Forum from "../components/forum";

import PrivateRoute from './private_route';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/forum" component={ <Forum/> } />
      </React.Fragment>
    );
  }
}

export default ReactRouter;