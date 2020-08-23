import { ACTIONS } from '../constants/constants';
import { hash } from '../constants/utils';

const initialState = {
  token: '',
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

export default (state = initialState, action) => {
  switch(action.type){
    case ACTIONS.SET_TOKEN:
      return { ...state, token: hash.access_token };
    case ACTIONS.SET_CURRENTLY_PLAYING:
      const { no_data, data } = action.payload;
      return { 
        ...state,
        item: data.item,
        is_playing: data.is_playing,
        progress_ms: data.progress_ms,
        no_data,
      }
    case ACTIONS.SET_HAVE_DATA:
      return { ...state, no_data: !action.haveData };
    default:
      return state;
  }
};
