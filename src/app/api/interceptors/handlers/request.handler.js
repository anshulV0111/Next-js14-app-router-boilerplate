import { TOKEN } from '@/constants';
import { cookies } from 'next/headers';

const requestHandler = (request) => {
  if (request?.handlerEnabled) {
    const authToken = cookies().get(TOKEN);
    if (authToken) {
      request.headers.Authorization = `AccessToken=${authToken?.value}`;
    }
  }
  return request;
};

export default requestHandler;
