import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {

  static propTypes = {
    authed: PropTypes.bool,
    component: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    path: PropTypes.string.isRequired,
  }

  render() {
    const authed = localStorage.getItem('isAuthed');
    const { path, component } = this.props;
    return (
      <Route
        path={ path }
        render={ () => {
          return authed ? (() => component)() : <Redirect to={ {
            pathname: '/login',
          } } />;
        } }
      />
    );
  }
}

export default PrivateRoute;
