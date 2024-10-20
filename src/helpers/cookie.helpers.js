'use server';

import { cookies } from 'next/headers';
import {
  ACCESS_TOKEN,
  CURRENT_LAYOUT,
  TOKEN, USER_DATA,
} from '../constants';

// const cookies = new Cookies();

export const getAuthToken = async () => {
  const token = cookies().get(TOKEN);
  return token;
};

export const setAuthToken = (authToken, res) => {
  cookies().set(TOKEN, authToken, {
    path: '/',
    maxAge: 172800000,
  });

  cookies().set(USER_DATA, res, {
    // httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    maxAge: 172800000,
    path: '/',
  });
};

export const removeAuthToken = () => {
  cookies().delete(TOKEN, { path: '/' });
  cookies().delete(ACCESS_TOKEN);
};

export const signIn = ({
  authToken, res,
}) => {
  setAuthToken(authToken, res);
};

export const signOut = async () => {
  removeAuthToken();
};

export const setCurrentLayout = ({
  layout,
}) => {
  cookies().set(CURRENT_LAYOUT, layout, {
    path: '/',
    maxAge: 172800000,
  });
};

export const getCurrentLayout = () => {
  const layout = cookies().get(CURRENT_LAYOUT);
  return layout;
};
