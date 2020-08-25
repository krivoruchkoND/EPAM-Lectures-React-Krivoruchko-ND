import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import './UserProfileComponent.css';

import { API_URL, ENDPOINTS } from '../../constants/constants';

class UserProfileComponent extends Component {
  componentDidMount() {
    const { user, setUserProfile, token } = this.props;
    if(!user.id) {
      axios.get(`${API_URL}/${ENDPOINTS.USER_PROFILE}`, {
        headers: {'Authorization': 'Bearer ' + token}
      })
        .then((response) => setUserProfile(response.data));
    }
  }

  render() {
    const { isShown, setUserProfileModalShown, user } = this.props;
    if (!isShown) {
      return <Redirect to='/' />
    }
    return (
      <Modal show={isShown} onHide={() => setUserProfileModalShown(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-around'>
          <Image src={user.images[0].url} roundedCircle className="user-image" />
          <ListGroup>
            <ListGroup.Item>Name: {user.display_name}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Country: {user.country}</ListGroup.Item>
            <ListGroup.Item>Followers: {user.followers.total}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    );
  }
};

UserProfileComponent.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object,
  isShown: PropTypes.bool,
  setUserProfileModalShown: PropTypes.func,
  setUserProfile: PropTypes.func,
};

export default UserProfileComponent;
