import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import logoIcon from '../../img/logo.png';
import userIcon from '../../img/user.png';
import searchIcon from '../../img/search.png';
import filterIcon from '../../img/filter.png';

import { PATHS } from '../../constants/constants';
 
class HeaderComponent extends Component {
  render() {
    const { setUserProfileModalShown } = this.props;

    return (
      <Navbar bg="light" expand="md" className="justify-content-between">
        <Navbar.Brand className="mx-0">
          <img
            src={logoIcon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Spotify logo"
          />
        </Navbar.Brand>
        <InputGroup className="mx-3 w-50">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" className="p-0 px-2">      
              <Image src={searchIcon} width="25" height="25" />
            </Button>
            <Button variant="outline-secondary" className="p-0 px-2">
              <Image src={filterIcon} width="25" height="25" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Link to={PATHS.USER_PROILE}>
          <Button variant="btn-link" className="p-0 px-2" onClick={() => setUserProfileModalShown(true)}>
            <Image src={userIcon} roundedCircle width="30" height="30" className="border border-dark p-1"/>
          </Button>
        </Link>
      </Navbar>
    );
  }
};

HeaderComponent.propTypes = {
  setUserProfileModalShown: PropTypes.func,
};

export default HeaderComponent;
