import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PATHS } from '../constants/constants';
import Login from '../containers/LoginComponentContainer';
import UserProfile from '../containers/UserProfileComponentContainer';

export default function getRoutes(token) {
  return [
    <Route
      exact
      path={`/`}
      key={PATHS.LOGIN}
      render={() => token
        ? (
          <p>MainComponent</p>
        )
        : <Redirect
            to={`/${PATHS.LOGIN}`}
          />
        }
    />,
    <Route
      exact
      path={`/${PATHS.LOGIN}`}
      key={PATHS.LOGIN}
      render={() => token
        ? (
          <Redirect
            to="/"
          />
        )
        : <Login />
      }
    />,
    <Route
      exact
      path={`/${PATHS.USER_PROILE}`}
      key={PATHS.USER_PROILE}
      render={() => token
        ? (
          <UserProfile />
        )
        : <Login />
      }
    />,
  ];
}
