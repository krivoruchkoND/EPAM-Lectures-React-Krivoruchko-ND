import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URL, API_URL, SCOPES } from '../../constants/constants';
import './AppComponent.css';
import PlayerComponent from '../PlayerComponent/PlayerComponent';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  getCurrentlyPlaying(token) {
    const { 
      setCurrentlyPlaying,
      setHaveData,
    } = this.props;
    axios({
      url: API_URL,
      type: 'GET',
      headers: {'Authorization': 'Bearer ' + token}
    }).then((response) => {
      if(!response.data) {
        console.log('no data')
        setHaveData(false);
        return;
      }
      setCurrentlyPlaying({ data: response.data, no_data: false });
    }).catch((error) => {
      setHaveData(false);
      console.log(error.response.data.error.message);
    })
  }

  componentDidUpdate(prevProps) {
    const { token } = this.props;
    const { prevToken } = prevProps;
    console.log(token, prevToken)
    console.log(token !== prevToken)
    if (token !== prevToken) {
      this.getCurrentlyPlaying(token);
    }
  }

  componentDidMount() {
    const { setToken } = this.props;
    setToken();
  }

  render() {
    const { item, is_playing, progress_ms, token, no_data} = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          {!token && (
            <a
              className='btn btn--loginApp-link'
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${[SCOPES.CURRENTLY_PLAYING, SCOPES.PLAYBACK_STATE].join()}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {!no_data && token ? (
            <PlayerComponent
              item={item}
              is_playing={is_playing}
              progress_ms={progress_ms}
            />
          ) : (
            <p>
              You need to be playing a song on Spotify, for something to appear here.
            </p>
          )}
        </header>
      </div>
    );
  }
}

AppComponent.propTypes = {
  token: PropTypes.string,
  item: PropTypes.object,
  is_playing: PropTypes.string,
  progress_ms: PropTypes.number,
  no_data: PropTypes.bool,
  setToken: PropTypes.func,
  setCurrentlyPlaying: PropTypes.func,
  setHaveData: PropTypes.func,
};

AppComponent.defaultProps = {
  token: null,
  item: {
    album: {
      images: [{ url: '' }]
    },
    name: '',
    artists: [{ name: '' }],
    duration_ms: 0,
  },
  is_playing: 'Paused',
  progress_ms: 0,
  no_data: false,
};

export default AppComponent;
