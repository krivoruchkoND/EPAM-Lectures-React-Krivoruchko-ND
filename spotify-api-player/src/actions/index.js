import { ACTIONS } from '../constants/constants';

export const setToken = (action) => ({
  type: ACTIONS.SET_TOKEN,
});

export const setCurrentlyPlaying = (payload) => ({
  type: ACTIONS.SET_CURRENTLY_PLAYING,
  payload,
});

export const setHaveData = (haveData) => ({
  type: ACTIONS.SET_HAVE_DATA,
  haveData,
});
