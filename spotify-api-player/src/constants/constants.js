export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

export const CLIENT_ID = 'ddc5cceaefff4ad8aaa7f3797c9209cd';

export const REDIRECT_URL = 'http://localhost:3000';

export const API_URL = 'https://api.spotify.com/v1';

export const ENDPOINTS = {
  USER_PROFILE: 'me',
  SEARCH: 'search'
}

export const SCOPES = {
  READ_EMAIL: 'user-read-email',
  READ_PRIVATE: 'user-read-private',
};

export const ACTIONS = {
  SET_TOKEN: 'SET_TOKEN',
  SET_LOGIN_MODAL_SHOWN: 'SET_LOGIN_MODAL_SHOWN',
  SET_USER_PROFILE_MODAL_SHOWN: 'SET_USER_PROFILE_MODAL_SHOWN',
  SET_USER_PROFILE: 'SET_USER_PROFILE',
};

export const PATHS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  SEARCH: 'search',
  AUTHORIZATION: 'authorize',
  USER_PROILE: 'userProfile',
};
