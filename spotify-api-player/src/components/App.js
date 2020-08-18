import React, { Component } from 'react';
import axios from 'axios';
import { hash } from '../constants/utils';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URL, API_URL, SCOPES } from '../constants/constants';
import './App.css';
import PlayerComponent from './PlayerComponent/PlayerComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    axios({
      url: API_URL,
      type: 'GET',
      headers: {'Authorization': 'Bearer ' + token}
    }).then((response) => {
      if(!response.data) {
        this.setState({
          no_data: true,
        });
        return;
      }
      this.setState({
        item: response.data.item,
        is_playing: response.data.is_playing,
        progress_ms: response.data.progress_ms,
        no_data: false,
      });
    })
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
    this.getCurrentlyPlaying(_token);
  }

  render() {
    const { item, is_playing, progress_ms} = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          {!this.state.token && (
            <a
              className='btn btn--loginApp-link'
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${[SCOPES.CURRENTLY_PLAYING, SCOPES.PLAYBACK_STATE].join()}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {!this.state.no_data ? (
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

export default App;
