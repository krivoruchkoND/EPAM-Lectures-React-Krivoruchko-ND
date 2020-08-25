import { ACTIONS } from '../constants/constants';
import { hash } from '../constants/utils';

const initialState = {
  token: null,
  userProfile: {
    display_name: '',
    country: '',
    email: '',
    id: '',
    followers: {  total: 0 },
    images: [{ url: '' },],
  },
  searchQuery: {
    q: '',
    type: '',
    market: '',
    limit: '20',
    offset: '0',
    include_external: '',
  },
  modal: {
    loginModalShown: true,
    userProfileModalShown: false,
  }
};

export default (state = initialState, action) => {
  switch(action.type){
    case ACTIONS.SET_TOKEN:
      return { ...state, token: hash.access_token };
    case ACTIONS.SET_LOGIN_MODAL_SHOWN:
      return { ...state, modal: { ...state.modal, loginModalShown: action.boolValue } };
    case ACTIONS.SET_USER_PROFILE_MODAL_SHOWN:
      return { ...state, modal: { ...state.modal, userProfileModalShown: action.boolValue } };
    case ACTIONS.SET_USER_PROFILE:
      return { ...state, userProfile: action.user };
    default:
      return state;
  }
};
