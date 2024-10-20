import { TOKEN } from '@/constants';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// 24 hour * 60 minutes of every hour
// const COOKIE_EXPIRE_MIN = 24 * 60

export const getClientAuthToken = () => cookies.get(TOKEN);

export const setClientAuthToken = (authAccessToken) => {
  cookies.set(TOKEN, authAccessToken, { // For latter use
    secure: false,
    sameSite: 'lax',
  });
};

export const removeAuthToken = () => {
  cookies.remove(TOKEN, { path: '/' });
};

export const clientSignOut = () => {
  removeAuthToken();
  if (window?.sbIframe) window?.sbIframe?.killIframeSession();
};

/**
 * Parses payload object from jwt
 * @param {string} token
 * @returns {Object}
 */
export const getPayloadFromToken = (token) => {
  if (token) {
    return JSON.parse(atob(token.split('.')[1]));
  } return null;
};
