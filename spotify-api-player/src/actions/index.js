import { ACTIONS } from '../constants/constants';

export const setToken = (action) => ({
  type: ACTIONS.SET_TOKEN,
});

export const setLoginModalShown = (boolValue) => ({
  type: ACTIONS.SET_LOGIN_MODAL_SHOWN,
  boolValue
});

export const setUserProfileModalShown = (boolValue) => ({
  type: ACTIONS.SET_USER_PROFILE_MODAL_SHOWN,
  boolValue
});

export const setUserProfile = (user) => ({
  type: ACTIONS.SET_USER_PROFILE,
  user
});
