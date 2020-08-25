import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setToken, setLoginModalShown } from '../actions';

import getRoutes from './routesMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Header from '../containers/HeaderComponentContainer';

class App extends Component {
  componentDidMount() {
    const { setToken } = this.props;
    setToken();
  }

  componentDidUpdate() {
    const { setLoginModalShown, token } = this.props;
    if (!token) {
      setLoginModalShown(true);
    } else {
      setLoginModalShown(false);
    }
  }

  getRoutesForRender() {
    const { token } = this.props;
    return getRoutes(token);
  }

  render() {
    return (
      <Container>
        <BrowserRouter>
        <Header />
            <Switch>
              { this.getRoutesForRender() }
              <Redirect
                from="*"
                to="/"
              />
            </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func,
  setLoginModalShown: PropTypes.func,
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = {
  setToken,
  setLoginModalShown,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
