/* eslint-disable import/prefer-default-export */
import config from '@/config/app.config';
import { CHAT_ACTIONS } from '@/constants';

/* ==========================================================================
  Formatted date in dd-mm-yyyy format
========================================================================== */
export const formatDate = (dateString) => {
  // Create a new Date object from the dateString
  const date = new Date(dateString);

  // Extract day, month, and year
  const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const isCSR = () => typeof window !== 'undefined';

const convertQueryParamToArray = (queryParam) => (!queryParam ? [] : queryParam?.split(','));

export const handleMultiSelectParams = (
  provider,
  action,
  searchParams,
  param,
) => {
  const params = new URLSearchParams(searchParams);
  // Force `provider` query param into an array
  const currentproviderArray = Array.isArray(params.get(param))
    ? params.get(param)
    : convertQueryParamToArray(params.get(param));

  if (action === 'add') {
    // Deduplicate providers with same value
    const newproviderArray = [
      ...new Set([...currentproviderArray, provider.id]),
    ];
    return newproviderArray;
  }
  currentproviderArray?.splice(
    currentproviderArray?.findIndex(
      (item) => item?.toString() === provider?.id?.toString(),
    ),
    1,
  );
  return currentproviderArray;
};

export const getScreenSize = () => {
  if (typeof window !== 'undefined') {
    const screenWidth = window?.innerWidth;
    if (screenWidth < 640) return 'sm';
    if (screenWidth < 768) return 'md';
    if (screenWidth < 1024) return 'lg';
    return 'xl';
  }
  return 'xl';
};

export const toTitleCase = (str) => {
  if (!str) return null;
  return str
    ?.split(' ')
    ?.map(
      (item) => `${item?.[0]?.toUpperCase()}${item?.slice(1)?.toLowerCase()}`,
    )
    ?.join('');
};

export const isValidJSONString = (str) => {
  try {
    const val = JSON.parse(str);
    return val;
  } catch (error) {
    return str;
  }
};

// Chat module: helpers
export const chatLogout = () => {
  if (document.getElementById('chat-drawer')) {
    document
      .getElementById('chat-drawer')
      .contentWindow.postMessage(
        JSON.stringify({ action: CHAT_ACTIONS.LOGOUT }),
        `${config.NEXT_PUBLIC_CHAT_URL}/`,
      );
  }
};

export const chatLogin = (token) => {
  if (document.getElementById('chat-drawer')) {
    document
      .getElementById('chat-drawer')
      .contentWindow.postMessage(
        JSON.stringify({ accessToken: token, action: CHAT_ACTIONS.LOGIN }),
        `${config.NEXT_PUBLIC_CHAT_URL}/`,
      );
  }
};

export const setChatTenant = () => {
  if (document.getElementById('chat-drawer')) {
    document
      .getElementById('chat-drawer')
      .contentWindow.postMessage(
        JSON.stringify({ action: CHAT_ACTIONS.SET_TENANT }),
        `${config.NEXT_PUBLIC_CHAT_URL}/`,
      );
  }
};
