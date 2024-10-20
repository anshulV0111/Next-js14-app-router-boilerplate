export const ROUTE_PATHS = Object.freeze({
  HOME: '/layout1',
  LOGIN: '/login',
  SHOWALL: '/all/',
  SEARCH: 'search',
  SIGNUP: '/signup',
});

/* ==========================================================================
  HTTP Method Types
========================================================================== */
export const METHOD_TYPES = Object.freeze({
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch',
});

/* ==========================================================================
LocalStorage / Cookie data
========================================================================== */
export const TOKEN = 'authtoken';
export const ACCESS_TOKEN = 'accessToken';
export const LOYALTY_TOKEN = 'loyaltyToken';
export const LOGIN_TIME = 'loginTime';
export const USER_ID = 'uid';
export const USER_DATA = 'userData';
export const USER_NAME = 'userName';
export const LANGUAGE = 'operator_language';
export const WALLETSETTING = 'operator_walletSetting';
export const CHAT = 'chat';
export const LIVE_DATA = 'liveData';
export const SHOW_SIDE_NAV = 'showSideNav';
export const PROVIDER_ID = 'providerId';
export const REFERRAL_CODE = 'referralCode';
export const CURRENT_LAYOUT = 'currentLayout';

/* Account option types */

export const AccountOptions = {
  myProfile: 'My Profile',
  wallet: 'Wallet',
  transactions: 'All Transactions',
  affiliates: 'My Affiliates',
};

export const TRANS_PAGE_SIZE = 10;

export const AGGREGATOR_ID = {
  NUX: 1,
};

export const PRODUCT_FETCH_COUNT = 27;

export const SKELETON_CARD_COUNT_PRODUCT = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 9,
};

export const CASINO_ANIMATION_CONFIG = (animationIndex, index) => {
  switch (animationIndex) {
    case 1: return {
      initial: {
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50,
      },
      whileInView: {
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 0.5, // Animation duration
        },
      },
      viewport: { once: true },
    };
    case 2: return {
      initial: {
        opacity: 0,
        x: 50, // All cards will slide in from the right
      },
      whileInView: {
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      },
      viewport: { once: true },
    };
    case 3: return {
      initial: {
        x: 100, // Start from right
        opacity: 0,
        scale: 0.8,
        rotate: 15,
      },
      animate: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: (index % PRODUCT_FETCH_COUNT) * 0.1, // Stagger based on index
          duration: 0.2,
        },
      },
    };
    case 4: return {
      initial: {
        x: 100, // Start from right
        opacity: 0,
        scale: 0.8,
        rotate: 15,
      },
      animate: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: 'tween',
          ease: [0.42, 0, 0.58, 1],
          delay:
            parseFloat(Math.ceil(index % PRODUCT_FETCH_COUNT) * 0.1),
          duration: 0.2,
        },
      },
      viewport: { once: true },
    };
    case 5: return {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: {
        type: 'tween',
        duration: 0.4,
        delay: (index % PRODUCT_FETCH_COUNT) * 0.1,
      },
    };
    default: return {
      initial: {
        x: 250,
        y: 250, // changed to x-axis
        opacity: 0,
        scale: 0.5,
        rotate: 0,
      },
      animate: {
        x: 0,
        y: 0, // changed to x-axis
        rotate: 360,
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 0.4,
          delay: (index % PRODUCT_FETCH_COUNT) * 0.1, // added delay to stagger the animation
        },
      },
      // viewport={{ once: false, amount: 0.9 }}
      transition: { duration: 0.8 },
    };
  }
};

export const MODAL_ID = {
  LOGIN: 'login-modal',
  AUTH: 'auth-modal',
};

// Chat module: constants
export const CHAT_ACTIONS = {
  LOGIN: 'addToken',
  LOGOUT: 'removeToken',
  CLOSE_CHAT: 'closeChat',
  LOGIN_PROMPT: 'showLoginPrompt',
  SET_TENANT: 'setTenant',
};

export const CASINO_NOT_FOUND_IMAGES = [
  'https://fungamess.games/images/nothing.jpeg',
  'http://103.249.40.50:8011/_next/image?url=https%3A%2F%2Ffungamess.games%2Fimages%2Fnothing.jpeg&w=3840&q=75',
];
