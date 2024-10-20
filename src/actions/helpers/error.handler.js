import { signOut } from '@/helpers/cookie.helpers';

export const errorHandler = (error) => {
  if (error?.[0]?.fields?.statusCode === 401 || error?.status === 401) {
    signOut();
  } else if (error?.[0]?.fields?.statusCode === 403 || error?.status === 403) {
    signOut();
  } else {
    console.log('Error:', error);
  }
  return null;
};
