import axios from 'axios';
import {
  AUTH_ENDPOINT,
  API_URL,
  PATHS,
  CLIENT_ID,
  REDIRECT_URL,
  SCOPES
} from '../constants/constants';

export const authorize = () => axios.get(AUTH_ENDPOINT, {
  params: {
    CLIENT_ID,
    REDIRECT_URL,
    SCOPES: Object.values(SCOPES).join(),
    response_type: 'token',
    show_dialog: 'true',
  }
})
