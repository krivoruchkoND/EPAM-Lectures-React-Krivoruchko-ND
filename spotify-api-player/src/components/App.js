import React, { Component } from "react";
import axios from "axios";
import { hash } from "../constants/utils";
import "./App.css";
import PlayerComponent from "./PlayerComponent/PlayerComponent";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "ddc5cceaefff4ad8aaa7f3797c9209cd";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0,
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    axios({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      headers: {"Authorization": "Bearer " + token}
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
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
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
