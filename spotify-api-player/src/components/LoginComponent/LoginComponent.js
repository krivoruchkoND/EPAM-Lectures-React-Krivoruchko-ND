import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URL, SCOPES } from '../../constants/constants';
import Modal from 'react-bootstrap/Modal';

const scope = Object.values(SCOPES).join(' ');
console.log(scope);

class LoginComponent extends Component {
  render() {
    const { isShown } = this.props; 
    return(
      <Modal show={isShown} backdrop='static'>
        <Modal.Header>
          <Modal.Title>Login to Spotify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a className="btn btn-primary"
            href={
              `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}&scope=${encodeURIComponent(scope)}&show_dialog=true`
            }
          >
            Login
          </a>
        </Modal.Body>
      </Modal>
    );
  }
}

LoginComponent.propTypes = {
  isShown: PropTypes.bool,
}

export default LoginComponent;
