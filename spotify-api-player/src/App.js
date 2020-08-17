import React, { Component } from "react";
import axios from "axios";
import hash from "./hash";
import logo from "./logo.svg";
import "./App.css";
import PlayerComponent from "./PlayerComponent";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
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
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    axios.interceptors.request.use(function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    });

    axios({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
    }).then((data) => {
      this.setState({
        item: data.item,
        is_playing: data.is_playing,
        progress_ms: data.progress_ms,
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
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && (
            <PlayerComponent
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.progress_ms}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
