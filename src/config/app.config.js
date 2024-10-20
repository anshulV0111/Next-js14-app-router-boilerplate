const config = {
  apiGateways: {
    BASE_URL_1: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    BASE_URL_2: `${process.env.NEXT_AUTH_API_BASE_URL}`,
  },
  SOCKET_URL: `${process.env.NEXT_PUBLIC_USER_BACKEND_SOCKET_URL}`,
  IMAGE_URL: 'https://gammastack-casino.s3.amazonaws.com/',
  SPORTBOOK_IFRAMEID: `${process.env.NEXT_PUBLIC_SPORT_IFRAME_ID}`,
  SPORTBOOK_SCRIPT_URL: `${process.env.NEXT_PUBLIC_SPORTS_RENDER_SCRIPT_URL}`,
  NEXT_PUBLIC_CHAT_URL: `${process.env.NEXT_PUBLIC_CHAT_URL}`,
};

export default config;
