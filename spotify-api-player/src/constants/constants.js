export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

export const CLIENT_ID = 'ddc5cceaefff4ad8aaa7f3797c9209cd';

export const REDIRECT_URL = 'http://localhost:3000';

export const API_URL = 'https://api.spotify.com/v1/me/player';

export const SCOPES = {
  CURRENTLY_PLAYING: 'user-read-currently-playing',
  PLAYBACK_STATE: 'user-read-playback-state',
};

export const ACTIONS = {
  SET_TOKEN: 'SET_TOKEN',
  SET_CURRENTLY_PLAYING: 'SET_CURRENTLY_PLAYING',
  SET_HAVE_DATA: 'SET_HAVE_DATA',
};
